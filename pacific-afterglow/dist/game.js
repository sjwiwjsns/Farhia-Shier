var _h=0,Xl=1,yh=2;var ql=1,Lo=2,Yn=3,oi=0,tn=1,en=2,He=0,ai=1,gn=2,Yl=3,Zl=4,Uo=5,En=100,Mh=101,Sh=102,bh=103,Eh=104,Ki=200,wh=201,Th=202,Ah=203,co=204,ho=205,Sr=206,Rh=207,br=208,Ch=209,Ph=210,Ih=211,Dh=212,Lh=213,Uh=214,No=0,Fo=1,Oo=2,Vi=3,Bo=4,zo=5,Ho=6,ko=7,$l=0,Nh=1,Fh=2,hi=0,Vo=1,Go=2,Wo=3,Cs=4,Xo=5,qo=6,Yo=7;var Jl=300,Qi=301,ji=302,Zo=303,$o=304,Er=306,Dn=1e3,Ei=1001,uo=1002,je=1003,Oh=1004;var wr=1005;var zn=1006,Jo=1007;var Ii=1008;var Tn=1009,Kl=1010,Ql=1011,Ps=1012,Ko=1013,Di=1014,Hn=1015,We=1016,Qo=1017,jo=1018,Li=1020,jl=35902,tc=35899,ec=1021,nc=1022,xn=1023,Ss=1026,Ui=1027,ta=1028,ea=1029,ic=1030,na=1031;var ia=1033,Tr=33776,Ar=33777,Rr=33778,Cr=33779,sa=35840,ra=35841,oa=35842,aa=35843,la=36196,ca=37492,ha=37496,ua=37808,fa=37809,da=37810,pa=37811,ma=37812,ga=37813,xa=37814,va=37815,_a=37816,ya=37817,Ma=37818,Sa=37819,ba=37820,Ea=37821,wa=36492,Ta=36494,Aa=36495,Ra=36283,Ca=36284,Pa=36285,Ia=36286;var tr=2300,fo=2301,lo=2302,Ol=2400,Bl=2401,zl=2402;var Bh=3200,zh=3201;var Da=0,Hh=1,ui="",Qe="srgb",Gi="srgb-linear",er="linear",pe="srgb";var ki=7680;var Hl=519,kh=512,Vh=513,Gh=514,sc=515,Wh=516,Xh=517,qh=518,Yh=519,kl=35044,fi=35048;var rc="300 es",Bn=2e3,nr=2001;var li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kc=1234567,Qs=Math.PI/180,Wi=180/Math.PI;function Is(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function oc(i,t){return(i%t+t)%t}function tf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ef(i,t,e){return i!==t?(e-i)/(t-i):0}function js(i,t,e){return(1-e)*i+e*t}function nf(i,t,e,n){return js(i,t,1-Math.exp(-e*n))}function sf(i,t=1){return t-Math.abs(oc(i,t*2)-t)}function rf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function of(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function af(i,t){return i+Math.floor(Math.random()*(t-i+1))}function lf(i,t){return i+Math.random()*(t-i)}function cf(i){return i*(.5-Math.random())}function hf(i){i!==void 0&&(Kc=i);let t=Kc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uf(i){return i*Qs}function ff(i){return i*Wi}function df(i){return(i&i-1)===0&&i!==0}function pf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ys(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var nn={DEG2RAD:Qs,RAD2DEG:Wi,generateUUID:Is,clamp:oe,euclideanModulo:oc,mapLinear:tf,inverseLerp:ef,lerp:js,damp:nf,pingpong:sf,smoothstep:rf,smootherstep:of,randInt:af,randFloat:lf,randFloatSpread:cf,seededRandom:hf,degToRad:uf,radToDeg:ff,isPowerOfTwo:df,ceilPowerOfTwo:pf,floorPowerOfTwo:mf,setQuaternionFromProperEuler:gf,normalize:hn,denormalize:ys},Lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],x=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==x){let m=1-o,p=l*f+c*d+h*x+u*_,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let w=Math.sqrt(b),A=Math.atan2(w,p*y);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}let S=o*y;if(l=l*m+f*S,c=c*m+d*S,h=h*m+x*S,u=u*m+_*S,m===1-o){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],x=r[a+3];return t[e]=o*x+h*u+l*d-c*f,t[e+1]=l*x+h*f+c*u-o*d,t[e+2]=c*x+h*d+o*f-l*u,t[e+3]=h*x-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ml.copy(this).projectOnVector(t),this.sub(ml)}reflect(t){return this.sub(ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ml=new I,Qc=new ge,ne=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],_=s[0],m=s[3],p=s[6],y=s[1],b=s[4],S=s[7],w=s[2],A=s[5],R=s[8];return r[0]=a*_+o*y+l*w,r[3]=a*m+o*b+l*A,r[6]=a*p+o*S+l*R,r[1]=c*_+h*y+u*w,r[4]=c*m+h*b+u*A,r[7]=c*p+h*S+u*R,r[2]=f*_+d*y+x*w,r[5]=f*m+d*b+x*A,r[8]=f*p+d*S+x*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,x=e*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(gl.makeScale(t,e)),this}rotate(t){return this.premultiply(gl.makeRotation(-t)),this}translate(t,e){return this.premultiply(gl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},gl=new ne;function ac(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zh(){let i=ir("canvas");return i.style.display="block",i}var jc={};function bs(i){i in jc||(jc[i]=!0,console.warn(i))}function $h(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var th=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xf(){let i={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gi]:{primaries:t,whitePoint:n,transfer:er,toXYZ:th,fromXYZ:eh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:th,fromXYZ:eh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),i}var ce=xf();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var as,po=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{as===void 0&&(as=ir("canvas")),as.width=t.width,as.height=t.height;let s=as.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=as}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vf=0,Es=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xl(s[a].image)):r.push(xl(s[a]))}else r=xl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function xl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _f=0,vl=new I,un=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ei,s=Ei,r=zn,a=Ii,o=xn,l=Tn,c=i.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Is(),this.name="",this.source=new Es(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vl).x}get height(){return this.source.getSize(vl).y}get depth(){return this.source.getSize(vl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dn:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dn:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Jl;un.DEFAULT_ANISOTROPY=1;var Me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,S=(d+1)/2,w=(p+1)/2,A=(h+f)/4,R=(u+_)/4,D=(x+m)/4;return b>S&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=R/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=D/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=D/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-x)*(m-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mo=class extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new un(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Es(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ie=class extends mo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},sr=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var go=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),Wr.subVectors(this.max,qs),ls.subVectors(t.a,qs),cs.subVectors(t.b,qs),hs.subVectors(t.c,qs),xi.subVectors(cs,ls),vi.subVectors(hs,cs),Oi.subVectors(ls,hs);let e=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-Oi.z,Oi.y,xi.z,0,-xi.x,vi.z,0,-vi.x,Oi.z,0,-Oi.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-Oi.y,Oi.x,0];return!_l(e,ls,cs,hs,Wr)||(e=[1,0,0,0,1,0,0,0,1],!_l(e,ls,cs,hs,Wr))?!1:(Xr.crossVectors(xi,vi),e=[Xr.x,Xr.y,Xr.z],_l(e,ls,cs,hs,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ti=[new I,new I,new I,new I,new I,new I,new I,new I],Nn=new I,Gr=new Xn,ls=new I,cs=new I,hs=new I,xi=new I,vi=new I,Oi=new I,qs=new I,Wr=new I,Xr=new I,Bi=new I;function _l(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Bi.fromArray(i,r);let o=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var yf=new Xn,Ys=new I,yl=new I,wi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(yl)),this.expandByPoint(Ys.copy(t.center).sub(yl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ei=new I,Ml=new I,qr=new I,_i=new I,Sl=new I,Yr=new I,bl=new I,xo=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ml.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(Ml);let r=t.distanceTo(e)*.5,a=-this.direction.dot(qr),o=_i.dot(this.direction),l=-_i.dot(qr),c=_i.lengthSq(),h=Math.abs(1-a*a),u,f,d,x;if(h>0)if(u=a*l-o,f=a*o-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ml).addScaledVector(qr,f),d}intersectSphere(t,e){ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){Sl.subVectors(e,t),Yr.subVectors(n,t),bl.crossVectors(Sl,Yr);let a=this.direction.dot(bl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);let l=o*this.direction.dot(Yr.crossVectors(_i,Yr));if(l<0)return null;let c=o*this.direction.dot(Sl.cross(_i));if(c<0||l+c>a)return null;let h=-o*_i.dot(bl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,x,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,x,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,x,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,x=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+x*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=x+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,x=c*h,_=c*u;e[0]=f+_*o,e[4]=x*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-x,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,x=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=x+d*o,e[1]=d+x*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,x=o*h,_=o*u;e[0]=l*h,e[4]=x*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,x=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=x*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+x,e[10]=f-_*u}else if(t.order==="XZY"){let f=a*l,d=a*c,x=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mf,t,Sf)}lookAt(t,e,n){let s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),yi.crossVectors(n,Sn),yi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),yi.crossVectors(n,Sn)),yi.normalize(),Zr.crossVectors(Sn,yi),s[0]=yi.x,s[4]=Zr.x,s[8]=Sn.x,s[1]=yi.y,s[5]=Zr.y,s[9]=Sn.y,s[2]=yi.z,s[6]=Zr.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],_=n[6],m=n[10],p=n[14],y=n[3],b=n[7],S=n[11],w=n[15],A=s[0],R=s[4],D=s[8],M=s[12],v=s[1],C=s[5],L=s[9],O=s[13],V=s[2],F=s[6],N=s[10],X=s[14],H=s[3],Q=s[7],it=s[11],dt=s[15];return r[0]=a*A+o*v+l*V+c*H,r[4]=a*R+o*C+l*F+c*Q,r[8]=a*D+o*L+l*N+c*it,r[12]=a*M+o*O+l*X+c*dt,r[1]=h*A+u*v+f*V+d*H,r[5]=h*R+u*C+f*F+d*Q,r[9]=h*D+u*L+f*N+d*it,r[13]=h*M+u*O+f*X+d*dt,r[2]=x*A+_*v+m*V+p*H,r[6]=x*R+_*C+m*F+p*Q,r[10]=x*D+_*L+m*N+p*it,r[14]=x*M+_*O+m*X+p*dt,r[3]=y*A+b*v+S*V+w*H,r[7]=y*R+b*C+S*F+w*Q,r[11]=y*D+b*L+S*N+w*it,r[15]=y*M+b*O+S*X+w*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],_=t[7],m=t[11],p=t[15];return x*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+_*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],_=t[13],m=t[14],p=t[15],y=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,b=x*f*c-h*m*c-x*l*d+a*m*d+h*l*p-a*f*p,S=h*_*c-x*u*c+x*o*d-a*_*d-h*o*p+a*u*p,w=x*u*l-h*_*l-x*o*f+a*_*f+h*o*m-a*u*m,A=e*y+n*b+s*S+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=y*R,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*R,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*R,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*R,t[4]=b*R,t[5]=(h*m*r-x*f*r+x*s*d-e*m*d-h*s*p+e*f*p)*R,t[6]=(x*l*r-a*m*r-x*s*c+e*m*c+a*s*p-e*l*p)*R,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*R,t[8]=S*R,t[9]=(x*u*r-h*_*r-x*n*d+e*_*d+h*n*p-e*u*p)*R,t[10]=(a*_*r-x*o*r+x*n*c-e*_*c-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*R,t[12]=w*R,t[13]=(h*_*s-x*u*s+x*n*f-e*_*f-h*n*m+e*u*m)*R,t[14]=(x*o*s-a*_*s-x*n*l+e*_*l+a*n*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,x=r*u,_=a*h,m=a*u,p=o*u,y=l*c,b=l*h,S=l*u,w=n.x,A=n.y,R=n.z;return s[0]=(1-(_+p))*w,s[1]=(d+S)*w,s[2]=(x-b)*w,s[3]=0,s[4]=(d-S)*A,s[5]=(1-(f+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(x+b)*R,s[9]=(m-y)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=us.set(s[0],s[1],s[2]).length(),a=us.set(s[4],s[5],s[6]).length(),o=us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Fn.copy(this);let c=1/r,h=1/a,u=1/o;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Bn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),x,_;if(l)x=r/(a-r),_=a*r/(a-r);else if(o===Bn)x=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===nr)x=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Bn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),x,_;if(l)x=1/(a-r),_=a/(a-r);else if(o===Bn)x=-2/(a-r),_=-(a+r)/(a-r);else if(o===nr)x=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},us=new I,Fn=new Gt,Mf=new I(0,0,0),Sf=new I(1,1,1),yi=new I,Zr=new I,Sn=new I,nh=new Gt,ih=new ge,fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ih.setFromEuler(this),this.setFromQuaternion(ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bf=0,sh=new I,fs=new ge,ni=new Gt,$r=new I,Zs=new I,Ef=new I,wf=new ge,rh=new I(1,0,0),oh=new I(0,1,0),ah=new I(0,0,1),lh={type:"added"},Tf={type:"removed"},ds={type:"childadded",child:null},El={type:"childremoved",child:null},ze=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new fn,n=new ge,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ne}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(rh,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,e){return sh.copy(t).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rh,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Zs,$r,this.up):ni.lookAt($r,Zs,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(ni),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lh),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tf),El.child=t,this.dispatchEvent(El),El.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lh),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,Ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,wf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ze.DEFAULT_UP=new I(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new I,ii=new I,wl=new I,si=new I,ps=new I,ms=new I,ch=new I,Tl=new I,Al=new I,Rl=new I,Cl=new Me,Pl=new Me,Il=new Me,bi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),ii.subVectors(n,e),wl.subVectors(t,e);let a=On.dot(On),o=On.dot(ii),l=On.dot(wl),c=ii.dot(ii),h=ii.dot(wl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,x=(a*h-o*l)*f;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Cl.setScalar(0),Pl.setScalar(0),Il.setScalar(0),Cl.fromBufferAttribute(t,e),Pl.fromBufferAttribute(t,n),Il.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Cl,r.x),a.addScaledVector(Pl,r.y),a.addScaledVector(Il,r.z),a}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),ii.subVectors(t,e),On.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),On.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ps.subVectors(s,n),ms.subVectors(r,n),Tl.subVectors(t,n);let l=ps.dot(Tl),c=ms.dot(Tl);if(l<=0&&c<=0)return e.copy(n);Al.subVectors(t,s);let h=ps.dot(Al),u=ms.dot(Al);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ps,a);Rl.subVectors(t,r);let d=ps.dot(Rl),x=ms.dot(Rl);if(x>=0&&d<=x)return e.copy(r);let _=d*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(ms,o);let m=h*x-d*u;if(m<=0&&u-h>=0&&d-x>=0)return ch.subVectors(r,s),o=(u-h)/(u-h+(d-x)),e.copy(s).addScaledVector(ch,o);let p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=oc(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Dl(a,r,t+1/3),this.g=Dl(a,r,t),this.b=Dl(a,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let n=Jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return ce.workingToColorSpace(rn.copy(this),t),Math.round(oe(rn.r*255,0,255))*65536+Math.round(oe(rn.g*255,0,255))*256+Math.round(oe(rn.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Qe){ce.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Jr);let n=js(Mi.h,Jr.h,e),s=js(Mi.s,Jr.s,e),r=js(Mi.l,Jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new gt;gt.NAMES=Jh;var Af=0,ci=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=ai,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=co,this.blendDst=ho,this.blendEquation=En,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==co&&(n.blendSrc=this.blendSrc),this.blendDst!==ho&&(n.blendDst=this.blendDst),this.blendEquation!==En&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ne=class extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new I,Kr=new Lt,Rf=0,on=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kl&&(t.usage=this.usage),t}};var or=class extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ar=class extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}},Cf=0,Pn=new Gt,Ll=new ze,gs=new I,bn=new Xn,$s=new Xn,Ze=new I,we=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ac(t)?ar:or)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return Ll.lookAt(t),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(bn.min,$s.min),bn.expandByPoint(Ze),Ze.addVectors(bn.max,$s.max),bn.expandByPoint(Ze)):(bn.expandByPoint($s.min),bn.expandByPoint($s.max))}bn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ze.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(t,c),Ze.add(gs)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new I,l[D]=new I;let c=new I,h=new I,u=new I,f=new Lt,d=new Lt,x=new Lt,_=new I,m=new I;function p(D,M,v){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,M),x.fromBufferAttribute(r,v),h.sub(c),u.sub(c),d.sub(f),x.sub(f);let C=1/(d.x*x.y-x.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(C),o[D].add(_),o[M].add(_),o[v].add(_),l[D].add(m),l[M].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,M=y.length;D<M;++D){let v=y[D],C=v.start,L=v.count;for(let O=C,V=C+L;O<V;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let b=new I,S=new I,w=new I,A=new I;function R(D){w.fromBufferAttribute(s,D),A.copy(w);let M=o[D];b.copy(M),b.sub(w.multiplyScalar(w.dot(M))).normalize(),S.crossVectors(A,M);let C=S.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,C)}for(let D=0,M=y.length;D<M;++D){let v=y[D],C=v.start,L=v.count;for(let O=C,V=C+L;O<V;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let x=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,x=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[x++]=c[d++]}return new on(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hh=new Gt,zi=new xo,Qr=new wi,uh=new I,jr=new I,to=new I,eo=new I,Ul=new I,no=new I,fh=new I,io=new I,Ft=class extends ze{constructor(t=new we,e=new Ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ul.fromBufferAttribute(u,t),a?no.addScaledVector(Ul,h):no.addScaledVector(Ul.sub(e),h))}e.add(no)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(Qr.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Qr,uh)===null||zi.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(hh.copy(r).invert(),zi.copy(t.ray).applyMatrix4(hh),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let m=f[x],p=a[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,w=b;S<w;S+=3){let A=o.getX(S),R=o.getX(S+1),D=o.getX(S+2);s=so(this,p,t,n,c,h,u,A,R,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=x,p=_;m<p;m+=3){let y=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);s=so(this,a,t,n,c,h,u,y,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let m=f[x],p=a[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,w=b;S<w;S+=3){let A=S,R=S+1,D=S+2;s=so(this,p,t,n,c,h,u,A,R,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=x,p=_;m<p;m+=3){let y=m,b=m+1,S=m+2;s=so(this,a,t,n,c,h,u,y,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Pf(i,t,e,n,s,r,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===oi,o),l===null)return null;io.copy(o),io.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(io);return c<e.near||c>e.far?null:{distance:c,point:io.clone(),object:i}}function so(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,jr),i.getVertexPosition(l,to),i.getVertexPosition(c,eo);let h=Pf(i,t,e,n,jr,to,eo,fh);if(h){let u=new I;bi.getBarycoord(fh,jr,to,eo,u),s&&(h.uv=bi.getInterpolatedAttribute(s,o,l,c,u,new Lt)),r&&(h.uv1=bi.getInterpolatedAttribute(r,o,l,c,u,new Lt)),a&&(h.normal=bi.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new I,materialIndex:0};bi.getNormal(jr,to,eo,f.normal),h.face=f,h.barycoord=u}return h}var te=class i extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function x(_,m,p,y,b,S,w,A,R,D,M){let v=S/R,C=w/D,L=S/2,O=w/2,V=A/2,F=R+1,N=D+1,X=0,H=0,Q=new I;for(let it=0;it<N;it++){let dt=it*C-O;for(let Rt=0;Rt<F;Rt++){let tt=Rt*v-L;Q[_]=tt*y,Q[m]=dt*b,Q[p]=V,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Rt/R),u.push(1-it/D),X+=1}}for(let it=0;it<D;it++)for(let dt=0;dt<R;dt++){let Rt=f+dt+F*it,tt=f+dt+F*(it+1),ct=f+(dt+1)+F*(it+1),At=f+(dt+1)+F*it;l.push(Rt,tt,At),l.push(tt,ct,At),H+=6}o.addGroup(d,H,M),d+=H,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=ts(i[e]);for(let s in n)t[s]=n[s]}return t}function If(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var Xe={clone:ts,merge:ln},Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,le=class extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=Lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=If(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},lr=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new I,dh=new Lt,ph=new Lt,Ge=class extends lr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,dh,ph),e.subVectors(ph,dh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xs=-90,vs=1,vo=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(xs,vs,t,e);s.layers=this.layers,this.add(s);let r=new Ge(xs,vs,t,e);r.layers=this.layers,this.add(r);let a=new Ge(xs,vs,t,e);a.layers=this.layers,this.add(a);let o=new Ge(xs,vs,t,e);o.layers=this.layers,this.add(o);let l=new Ge(xs,vs,t,e);l.layers=this.layers,this.add(l);let c=new Ge(xs,vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},cr=class extends un{constructor(t=[],e=Qi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_o=class extends Ie{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new te(5,5,5),r=new le({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:He});r.uniforms.tEquirect.value=e;let a=new Ft(s,r),o=e.minFilter;return e.minFilter===Ii&&(e.minFilter=zn),new vo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Pe=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Uf={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new gt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Xi=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ti=class extends un{constructor(t=null,e=1,n=1,s,r,a,o,l,c=je,h=je,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var an=class extends on{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_s=new Gt,mh=new Gt,ro=[],gh=new Xn,Nf=new Gt,Js=new Ft,Ks=new wi,Wt=class extends Ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new an(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),gh.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(gh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),Ks.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_s),mh.multiplyMatrices(n,_s),Js.matrixWorld=mh,Js.raycast(t,ro);for(let a=0,o=ro.length;a<o;a++){let l=ro[a];l.instanceId=r,l.object=this,e.push(l)}ro.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new an(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ti(new Float32Array(s*this.count),s,this.count,ta,Hn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nl=new I,Ff=new I,Of=new ne,In=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Nl.subVectors(n,e).cross(Ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Nl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Of.getNormalMatrix(t),s=this.coplanarPoint(Nl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new wi,Bf=new Lt(.5,.5),oo=new I,Ts=class{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],x=r[8],_=r[9],m=r[10],p=r[11],y=r[12],b=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,p-x,w-y).normalize(),s[1].setComponents(c+a,d+h,p+x,w+y).normalize(),s[2].setComponents(c+o,d+u,p+_,w+b).normalize(),s[3].setComponents(c-o,d-u,p-_,w-b).normalize(),n)s[4].setComponents(l,f,m,S).normalize(),s[5].setComponents(c-l,d-f,p-m,w-S).normalize();else if(s[4].setComponents(c-l,d-f,p-m,w-S).normalize(),e===Bn)s[5].setComponents(c+l,d+f,p+m,w+S).normalize();else if(e===nr)s[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){Hi.center.set(0,0,0);let e=Bf.distanceTo(t.center);return Hi.radius=.7071067811865476+e,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(oo.x=s.normal.x>0?t.max.x:t.min.x,oo.y=s.normal.y>0?t.max.y:t.min.y,oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qi=class extends un{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yi=class extends un{constructor(t,e,n=Di,s,r,a,o=je,l=je,c,h=Ss,u=1){if(h!==Ss&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Es(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ur=class extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var fr=class i extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new Lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ue=class i extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,_=[],m=n/2,p=0;y(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(d,2));function y(){let S=new I,w=new I,A=0,R=(e-t)/n;for(let D=0;D<=r;D++){let M=[],v=D/r,C=v*(e-t)+t;for(let L=0;L<=s;L++){let O=L/s,V=O*l+o,F=Math.sin(V),N=Math.cos(V);w.x=C*F,w.y=-v*n+m,w.z=C*N,u.push(w.x,w.y,w.z),S.set(F,R,N).normalize(),f.push(S.x,S.y,S.z),d.push(O,1-v),M.push(x++)}_.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){let v=_[M][D],C=_[M+1][D],L=_[M+1][D+1],O=_[M][D+1];(t>0||M!==0)&&(h.push(v,C,O),A+=3),(e>0||M!==r-1)&&(h.push(C,L,O),A+=3)}c.addGroup(p,A,0),p+=A}function b(S){let w=x,A=new Lt,R=new I,D=0,M=S===!0?t:e,v=S===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),x++;let C=x;for(let L=0;L<=s;L++){let V=L/s*l+o,F=Math.cos(V),N=Math.sin(V);R.x=M*N,R.y=m*v,R.z=M*F,u.push(R.x,R.y,R.z),f.push(0,v,0),A.x=F*.5+.5,A.y=N*.5*v+.5,d.push(A.x,A.y),x++}for(let L=0;L<s;L++){let O=w+L,V=C+L;S===!0?h.push(V,V+1,O):h.push(V+1,V,O),D+=3}c.addGroup(p,D,S===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ai=class i extends ue{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var dr=class i extends we{constructor(t=[new Lt(0,-.5),new Lt(.5,0),new Lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=oe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new I,f=new Lt,d=new I,x=new I,_=new I,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(x)}for(let y=0;y<=e;y++){let b=n+y*h*s,S=Math.sin(b),w=Math.cos(b);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*S,u.y=t[A].y,u.z=t[A].x*w,a.push(u.x,u.y,u.z),f.x=y/e,f.y=A/(t.length-1),o.push(f.x,f.y);let R=l[3*A+0]*S,D=l[3*A+1],M=l[3*A+0]*w;c.push(R,D,M)}}for(let y=0;y<e;y++)for(let b=0;b<t.length-1;b++){let S=b+y*t.length,w=S,A=S+t.length,R=S+t.length+1,D=S+1;r.push(w,A,D),r.push(R,D,A)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("uv",new ie(o,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Se=class i extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],x=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let b=0;b<c;b++){let S=b*u-r;x.push(S,-y,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let b=y+c*p,S=y+c*(p+1),w=y+1+c*(p+1),A=y+1+c*p;d.push(b,S,A),d.push(S,w,A)}this.setIndex(d),this.setAttribute("position",new ie(x,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},pr=class i extends we{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new I,x=new Lt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/e+1)/2,x.y=(d.y/e+1)/2,h.push(x.x,x.y)}u+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let y=p+m,b=y,S=y+n+1,w=y+n+2,A=y+1;o.push(b,S,A),o.push(S,w,A)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var qn=class i extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,f=new I,d=[],x=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],b=p/n,S=0;p===0&&a===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let w=0;w<=e;w++){let A=w/e;u.x=-t*Math.cos(s+A*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+A*r)*Math.sin(a+b*o),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+S,1-b),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let b=h[p][y+1],S=h[p][y],w=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&d.push(b,S,A),(p!==n-1||l<Math.PI)&&d.push(S,w,A)}this.setIndex(d),this.setAttribute("position",new ie(x,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ri=class i extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let _=x/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let _=(s+1)*d+x-1,m=(s+1)*(d-1)+x-1,p=(s+1)*(d-1)+x,y=(s+1)*d+x;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var mr=class extends le{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ht=class extends ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},As=class extends Ht{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var gr=class extends ci{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var yo=class extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Mo=class extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ao(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function zf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},So=class extends Zi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ol,endingEnd:Ol}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bl:r=t,o=2*e-n;break;case zl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bl:a=t,l=2*n-e;break;case zl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-e)/(s-e),_=x*x,m=_*x,p=-f*m+2*f*_-f*x,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*x+1,b=(-1-d)*m+(1.5+d)*_+.5*x,S=d*m-d*_;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+y*a[c+w]+b*a[l+w]+S*a[u+w];return r}},bo=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Eo=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ao(e,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ao(t.times,Array),values:ao(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new So(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case tr:e=this.InterpolantFactoryMethodDiscrete;break;case fo:e=this.InterpolantFactoryMethodLinear;break;case lo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return lo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&zf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===lo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let _=e[u+x];if(_!==e[f+x]||_!==e[d+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=fo;var Ci=class extends wn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=tr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};wo.prototype.ValueTypeName="color";var To=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};To.prototype.ValueTypeName="number";var Ao=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ge.slerpFlat(r,0,a,c-o,a,c,l);return r}},xr=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ao(this.times,this.values,this.getValueSize(),t)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends wn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=tr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ro=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};Ro.prototype.ValueTypeName="vector";var Co=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Kh=new Co,Po=class{constructor(t){this.manager=t!==void 0?t:Kh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Po.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},vr=class extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Fl=new Gt,xh=new I,vh=new I,Io=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;xh.setFromMatrixPosition(t.matrixWorld),e.position.copy(xh),vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vh),e.updateMatrixWorld(),Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Vl=class extends Io{constructor(){super(new Ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Wi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},_r=class extends Rs{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Vl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var $i=class extends lr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gl=class extends Io{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Gl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Mr=class extends we{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Do=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ji=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var cc="\\[\\]\\.:\\/",Hf=new RegExp("["+cc+"]","g"),hc="[^"+cc+"]",kf="[^"+cc.replace("\\.","")+"]",Vf=/((?:WC+[\/:])*)/.source.replace("WC",hc),Gf=/(WCOD+)?/.source.replace("WCOD",kf),Wf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),Xf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),qf=new RegExp("^"+Vf+Gf+Wf+Xf+"$"),Yf=["material","materials","bones","map"],Wl=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hf,"")}static parseTrackName(t){let e=qf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Wl;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gx=new Float32Array(1);function uc(i,t,e,n){let s=Zf(n);switch(e){case ec:return i*t;case ta:return i*t/s.components*s.byteLength;case ea:return i*t/s.components*s.byteLength;case ic:return i*t*2/s.components*s.byteLength;case na:return i*t*2/s.components*s.byteLength;case nc:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case ia:return i*t*4/s.components*s.byteLength;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:case aa:return Math.max(i,16)*Math.max(t,8)/4;case sa:case oa:return Math.max(i,8)*Math.max(t,8)/2;case la:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wa:case Ta:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ra:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Pa:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zf(i){switch(i){case Tn:case Kl:return{byteLength:1,components:1};case Ps:case Ql:case We:return{byteLength:2,components:1};case Qo:case jo:return{byteLength:2,components:4};case Di:case Ko:case Hn:return{byteLength:4,components:1};case jl:case tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Mu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ed(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],_=u[d];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,id=`#ifdef USE_ALPHAHASH
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
#endif`,sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ld=`#ifdef USE_AOMAP
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
#endif`,cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hd=`#ifdef USE_BATCHING
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
#endif`,ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,md=`#ifdef USE_IRIDESCENCE
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
#endif`,gd=`#ifdef USE_BUMPMAP
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
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wd=`#define PI 3.141592653589793
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
} // validated`,Td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ad=`vec3 transformedNormal = objectNormal;
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
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
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
}`,Wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yd=`uniform bool receiveShadow;
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
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,$d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jd=`PhysicalMaterial material;
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
#endif`,tp=`struct PhysicalMaterial {
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
}`,ep=`
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
#endif`,np=`#if defined( RE_IndirectDiffuse )
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
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,up=`#if defined( USE_POINTS_UV )
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
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
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
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
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
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hp=`float getShadowMask() {
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
}`,kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wp=`#ifdef USE_SKINNING
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
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
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
}`,lm=`#if DEPTH_PACKING == 3200
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
}`,cm=`#define DISTANCE
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
}`,hm=`#define DISTANCE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 diffuse;
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
}`,xm=`#define LAMBERT
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
}`,vm=`#define LAMBERT
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
}`,_m=`#define MATCAP
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
}`,ym=`#define MATCAP
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
}`,Mm=`#define NORMAL
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
}`,Sm=`#define NORMAL
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
}`,bm=`#define PHONG
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
}`,Em=`#define PHONG
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
}`,wm=`#define STANDARD
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
}`,Tm=`#define STANDARD
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
}`,Am=`#define TOON
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
}`,Rm=`#define TOON
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
}`,Cm=`uniform float size;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Dm=`uniform vec3 color;
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
}`,Lm=`uniform float rotation;
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
}`,Um=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:nd,alphahash_pars_fragment:id,alphamap_fragment:sd,alphamap_pars_fragment:rd,alphatest_fragment:od,alphatest_pars_fragment:ad,aomap_fragment:ld,aomap_pars_fragment:cd,batching_pars_vertex:hd,batching_vertex:ud,begin_vertex:fd,beginnormal_vertex:dd,bsdfs:pd,iridescence_fragment:md,bumpmap_pars_fragment:gd,clipping_planes_fragment:xd,clipping_planes_pars_fragment:vd,clipping_planes_pars_vertex:_d,clipping_planes_vertex:yd,color_fragment:Md,color_pars_fragment:Sd,color_pars_vertex:bd,color_vertex:Ed,common:wd,cube_uv_reflection_fragment:Td,defaultnormal_vertex:Ad,displacementmap_pars_vertex:Rd,displacementmap_vertex:Cd,emissivemap_fragment:Pd,emissivemap_pars_fragment:Id,colorspace_fragment:Dd,colorspace_pars_fragment:Ld,envmap_fragment:Ud,envmap_common_pars_fragment:Nd,envmap_pars_fragment:Fd,envmap_pars_vertex:Od,envmap_physical_pars_fragment:Zd,envmap_vertex:Bd,fog_vertex:zd,fog_pars_vertex:Hd,fog_fragment:kd,fog_pars_fragment:Vd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Wd,lights_lambert_fragment:Xd,lights_lambert_pars_fragment:qd,lights_pars_begin:Yd,lights_toon_fragment:$d,lights_toon_pars_fragment:Jd,lights_phong_fragment:Kd,lights_phong_pars_fragment:Qd,lights_physical_fragment:jd,lights_physical_pars_fragment:tp,lights_fragment_begin:ep,lights_fragment_maps:np,lights_fragment_end:ip,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:op,logdepthbuf_vertex:ap,map_fragment:lp,map_pars_fragment:cp,map_particle_fragment:hp,map_particle_pars_fragment:up,metalnessmap_fragment:fp,metalnessmap_pars_fragment:dp,morphinstance_vertex:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:xp,morphtarget_vertex:vp,normal_fragment_begin:_p,normal_fragment_maps:yp,normal_pars_fragment:Mp,normal_pars_vertex:Sp,normal_vertex:bp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Rp,opaque_fragment:Cp,packing:Pp,premultiplied_alpha_fragment:Ip,project_vertex:Dp,dithering_fragment:Lp,dithering_pars_fragment:Up,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:Op,shadowmap_pars_vertex:Bp,shadowmap_vertex:zp,shadowmask_pars_fragment:Hp,skinbase_vertex:kp,skinning_pars_vertex:Vp,skinning_vertex:Gp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:qp,tonemapping_fragment:Yp,tonemapping_pars_fragment:Zp,transmission_fragment:$p,transmission_pars_fragment:Jp,uv_pars_fragment:Kp,uv_pars_vertex:Qp,uv_vertex:jp,worldpos_vertex:tm,background_vert:em,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:sm,cube_vert:rm,cube_frag:om,depth_vert:am,depth_frag:lm,distanceRGBA_vert:cm,distanceRGBA_frag:hm,equirect_vert:um,equirect_frag:fm,linedashed_vert:dm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:xm,meshlambert_frag:vm,meshmatcap_vert:_m,meshmatcap_frag:ym,meshnormal_vert:Mm,meshnormal_frag:Sm,meshphong_vert:bm,meshphong_frag:Em,meshphysical_vert:wm,meshphysical_frag:Tm,meshtoon_vert:Am,meshtoon_frag:Rm,points_vert:Cm,points_frag:Pm,shadow_vert:Im,shadow_frag:Dm,sprite_vert:Lm,sprite_frag:Um},Tt={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Zn={basic:{uniforms:ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new gt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:ln([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:ln([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new gt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:ln([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:ln([Tt.points,Tt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:ln([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:ln([Tt.common,Tt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:ln([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:ln([Tt.sprite,Tt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:ln([Tt.common,Tt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:ln([Tt.lights,Tt.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Zn.physical={uniforms:ln([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var La={r:0,b:0,g:0},es=new fn,Nm=new Gt;function Fm(i,t,e,n,s,r,a){let o=new gt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function x(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function _(b){let S=!1,w=x(b);w===null?p(o,l):w&&w.isColor&&(p(w,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){let w=x(S);w&&(w.isCubeTexture||w.mapping===Er)?(h===void 0&&(h=new Ft(new te(1,1,1),new le({name:"BackgroundCubeMaterial",uniforms:ts(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),es.copy(S.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(es)),h.material.toneMapped=ce.getTransfer(w.colorSpace)!==pe,(u!==w||f!==w.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ft(new Se(2,2),new le({name:"BackgroundMaterial",uniforms:ts(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ce.getTransfer(w.colorSpace)!==pe,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(La,lc(i)),n.buffers.color.setClear(La.r,La.g,La.b,S,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m,dispose:y}}function Om(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(v,C,L,O,V){let F=!1,N=u(O,L,C);r!==N&&(r=N,c(r.object)),F=d(v,O,L,V),F&&x(v,O,L,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,S(v,C,L,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,C,L){let O=L.wireframe===!0,V=n[v.id];V===void 0&&(V={},n[v.id]=V);let F=V[C.id];F===void 0&&(F={},V[C.id]=F);let N=F[O];return N===void 0&&(N=f(l()),F[O]=N),N}function f(v){let C=[],L=[],O=[];for(let V=0;V<e;V++)C[V]=0,L[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:O,object:v,attributes:{},index:null}}function d(v,C,L,O){let V=r.attributes,F=C.attributes,N=0,X=L.getAttributes();for(let H in X)if(X[H].location>=0){let it=V[H],dt=F[H];if(dt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor)),it===void 0||it.attribute!==dt||dt&&it.data!==dt.data)return!0;N++}return r.attributesNum!==N||r.index!==O}function x(v,C,L,O){let V={},F=C.attributes,N=0,X=L.getAttributes();for(let H in X)if(X[H].location>=0){let it=F[H];it===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(it=v.instanceColor));let dt={};dt.attribute=it,it&&it.data&&(dt.data=it.data),V[H]=dt,N++}r.attributes=V,r.attributesNum=N,r.index=O}function _(){let v=r.newAttributes;for(let C=0,L=v.length;C<L;C++)v[C]=0}function m(v){p(v,0)}function p(v,C){let L=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;L[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),V[v]!==C&&(i.vertexAttribDivisor(v,C),V[v]=C)}function y(){let v=r.newAttributes,C=r.enabledAttributes;for(let L=0,O=C.length;L<O;L++)C[L]!==v[L]&&(i.disableVertexAttribArray(L),C[L]=0)}function b(v,C,L,O,V,F,N){N===!0?i.vertexAttribIPointer(v,C,L,V,F):i.vertexAttribPointer(v,C,L,O,V,F)}function S(v,C,L,O){_();let V=O.attributes,F=L.getAttributes(),N=C.defaultAttributeValues;for(let X in F){let H=F[X];if(H.location>=0){let Q=V[X];if(Q===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),Q!==void 0){let it=Q.normalized,dt=Q.itemSize,Rt=t.get(Q);if(Rt===void 0)continue;let tt=Rt.buffer,ct=Rt.type,At=Rt.bytesPerElement,q=ct===i.INT||ct===i.UNSIGNED_INT||Q.gpuType===Ko;if(Q.isInterleavedBufferAttribute){let j=Q.data,ot=j.stride,Et=Q.offset;if(j.isInstancedInterleavedBuffer){for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt,j.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let rt=0;rt<H.locationSize;rt++)b(H.location+rt,dt/H.locationSize,ct,it,ot*At,(Et+dt/H.locationSize*rt)*At,q)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<H.locationSize;j++)p(H.location+j,Q.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<H.locationSize;j++)m(H.location+j);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let j=0;j<H.locationSize;j++)b(H.location+j,dt/H.locationSize,ct,it,dt*At,dt/H.locationSize*j*At,q)}}else if(N!==void 0){let it=N[X];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(H.location,it);break;case 3:i.vertexAttrib3fv(H.location,it);break;case 4:i.vertexAttrib4fv(H.location,it);break;default:i.vertexAttrib1fv(H.location,it)}}}}y()}function w(){D();for(let v in n){let C=n[v];for(let L in C){let O=C[L];for(let V in O)h(O[V].object),delete O[V];delete C[L]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let C=n[v.id];for(let L in C){let O=C[L];for(let V in O)h(O[V].object),delete O[V];delete C[L]}delete n[v.id]}function R(v){for(let C in n){let L=n[C];if(L[v.id]===void 0)continue;let O=L[v.id];for(let V in O)h(O[V].object),delete O[V];delete L[v.id]}}function D(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Bm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<c.length;x++)a(c[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*f[_];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let D=R===We&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Tn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Hn&&!D)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:w,maxSamples:A}}function Hm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new In,o=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,b=y*4,S=p.clippingState||null;l.value=S,S=h(x,f,b,d);for(let w=0;w!==b;++w)S[w]=e[w];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,x){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,x!==!0||m===null){let p=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=d;b!==_;++b,S+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function km(i){let t=new WeakMap;function e(a,o){return o===Zo?a.mapping=Qi:o===$o&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Zo||o===$o)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new _o(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ls=4,Qh=[.125,.215,.35,.446,.526,.582],ss=20,fc=new $i,jh=new gt,dc=null,pc=0,mc=0,gc=!1,is=(1+Math.sqrt(5))/2,Ds=1/is,tu=[new I(-is,Ds,0),new I(is,Ds,0),new I(-Ds,0,is),new I(Ds,0,is),new I(0,is,-Ds),new I(0,is,Ds),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Vm=new I,Ns=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Vm}=r;dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dc,pc,mc),this._renderer.xr.enabled=gc,t.scissorTest=!1,Ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:We,format:xn,colorSpace:Gi,depthBuffer:!1},s=eu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gm(r)),this._blurMaterial=Wm(r,t,e)}return s}_compileMaterial(t){let e=new Ft(this._lodPlanes[0],t);this._renderer.compile(e,fc)}_sceneToCubeUV(t,e,n,s,r){let l=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(jh),u.toneMapping=hi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Ne({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new Ft(new te,_),p=!1,y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,p=!0):(_.color.copy(jh),p=!0);for(let b=0;b<6;b++){let S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let w=this._cubeSize;Ua(s,S*w,b>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qi||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ua(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,fc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tu[(s-r-1)%tu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ft(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ss-1),_=r/x,m=isFinite(r)?1+Math.floor(h*_):ss;m>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let p=[],y=0;for(let R=0;R<ss;++R){let D=R/_,M=Math.exp(-D*D/2);p.push(M),R===0?y+=M:R<m&&(y+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=x,f.mipInt.value=b-n;let S=this._sizeLods[s],w=3*S*(s>b-Ls?s-b+Ls:0),A=4*(this._cubeSize-S);Ua(e,w,A,3*S,2*S),l.setRenderTarget(e),l.render(u,fc)}};function Gm(i){let t=[],e=[],n=[],s=i,r=i-Ls+1+Qh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ls?l=Qh[a-i+Ls-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,_=3,m=2,p=1,y=new Float32Array(_*x*d),b=new Float32Array(m*x*d),S=new Float32Array(p*x*d);for(let A=0;A<d;A++){let R=A%3*2/3-1,D=A>2?0:-1,M=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];y.set(M,_*x*A),b.set(f,m*x*A);let v=[A,A,A,A,A,A];S.set(v,p*x*A)}let w=new we;w.setAttribute("position",new on(y,_)),w.setAttribute("uv",new on(b,m)),w.setAttribute("faceIndex",new on(S,p)),t.push(w),s>Ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function eu(i,t,e){let n=new Ie(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ua(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wm(i,t,e){let n=new Float32Array(ss),s=new I(0,1,0);return new le({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:He,depthTest:!1,depthWrite:!1})}function nu(){return new le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:He,depthTest:!1,depthWrite:!1})}function iu(){return new le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:He,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function Xm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Zo||l===$o,h=l===Qi||l===ji;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ns(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ns(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function qm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ym(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,x=u.attributes.position,_=0;if(d!==null){let y=d.array;_=d.version;for(let b=0,S=y.length;b<S;b+=3){let w=y[b+0],A=y[b+1],R=y[b+2];f.push(w,A,A,R,R,w)}}else if(x!==void 0){let y=x.array;_=x.version;for(let b=0,S=y.length/3-1;b<S;b+=3){let w=b+0,A=b+1,R=b+2;f.push(w,A,A,R,R,w)}}else return;let m=new(ac(f)?ar:or)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Zm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,f*a,x),e.update(d,n,x))}function h(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let m=0;for(let p=0;p<x;p++)m+=d[p];e.update(m,n,1)}function u(f,d,x,_){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,x);let p=0;for(let y=0;y<x;y++)p+=d[y]*_[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $m(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jm(i,t,e){let n=new WeakMap,s=new Me;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;d===!0&&(b=1),x===!0&&(b=2),_===!0&&(b=3);let S=o.attributes.position.count*b,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*w*4*u),R=new sr(A,S,w,u);R.type=Hn,R.needsUpdate=!0;let D=b*4;for(let v=0;v<u;v++){let C=m[v],L=p[v],O=y[v],V=S*w*4*v;for(let F=0;F<C.count;F++){let N=F*D;d===!0&&(s.fromBufferAttribute(C,F),A[V+N+0]=s.x,A[V+N+1]=s.y,A[V+N+2]=s.z,A[V+N+3]=0),x===!0&&(s.fromBufferAttribute(L,F),A[V+N+4]=s.x,A[V+N+5]=s.y,A[V+N+6]=s.z,A[V+N+7]=0),_===!0&&(s.fromBufferAttribute(O,F),A[V+N+8]=s.x,A[V+N+9]=s.y,A[V+N+10]=s.z,A[V+N+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new Lt(S,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Km(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Su=new un,su=new Yi(1,1),bu=new sr,Eu=new go,wu=new cr,ru=[],ou=[],au=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function Fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ru[s];if(r===void 0&&(r=new Float32Array(s),ru[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oa(i,t){let e=ou[t];e===void 0&&(e=new Int32Array(t),ou[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function n0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;cu.set(n),i.uniformMatrix2fv(this.addr,!1,cu),Ye(e,n)}}function i0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;lu.set(n),i.uniformMatrix3fv(this.addr,!1,lu),Ye(e,n)}}function s0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;au.set(n),i.uniformMatrix4fv(this.addr,!1,au),Ye(e,n)}}function r0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function c0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function h0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function d0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(su.compareFunction=sc,r=su):r=Su,e.setTexture2D(t||r,s)}function p0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eu,s)}function m0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wu,s)}function g0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bu,s)}function x0(i){switch(i){case 5126:return Qm;case 35664:return jm;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return a0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return h0;case 36295:return u0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function v0(i,t){i.uniform1fv(this.addr,t)}function _0(i,t){let e=Fs(t,this.size,2);i.uniform2fv(this.addr,e)}function y0(i,t){let e=Fs(t,this.size,3);i.uniform3fv(this.addr,e)}function M0(i,t){let e=Fs(t,this.size,4);i.uniform4fv(this.addr,e)}function S0(i,t){let e=Fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function b0(i,t){let e=Fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E0(i,t){let e=Fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function w0(i,t){i.uniform1iv(this.addr,t)}function T0(i,t){i.uniform2iv(this.addr,t)}function A0(i,t){i.uniform3iv(this.addr,t)}function R0(i,t){i.uniform4iv(this.addr,t)}function C0(i,t){i.uniform1uiv(this.addr,t)}function P0(i,t){i.uniform2uiv(this.addr,t)}function I0(i,t){i.uniform3uiv(this.addr,t)}function D0(i,t){i.uniform4uiv(this.addr,t)}function L0(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Su,r[a])}function U0(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Eu,r[a])}function N0(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||wu,r[a])}function F0(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||bu,r[a])}function O0(i){switch(i){case 5126:return v0;case 35664:return _0;case 35665:return y0;case 35666:return M0;case 35674:return S0;case 35675:return b0;case 35676:return E0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return I0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}var vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=x0(e.type)}},_c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O0(e.type)}},yc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},xc=/(\w+)(\])?(\[|\.)?/g;function hu(i,t){i.seq.push(t),i.map[t.id]=t}function B0(i,t,e){let n=i.name,s=n.length;for(xc.lastIndex=0;;){let r=xc.exec(n),a=xc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hu(e,c===void 0?new vc(o,i,t):new _c(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new yc(o),hu(e,u)),e=u}}}var Us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);B0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function uu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var z0=37297,H0=0;function k0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var fu=new ne;function V0(i){ce._getMatrix(fu,ce.workingColorSpace,i);let t=`mat3( ${fu.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case er:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function du(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+k0(i.getShaderSource(t),o)}else return r}function G0(i,t){let e=V0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function W0(i,t){let e;switch(t){case Vo:e="Linear";break;case Go:e="Reinhard";break;case Wo:e="Cineon";break;case Cs:e="ACESFilmic";break;case qo:e="AgX";break;case Yo:e="Neutral";break;case Xo:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Na=new I;function X0(){ce.getLuminanceCoefficients(Na);let i=Na.x.toFixed(4),t=Na.y.toFixed(4),e=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function Y0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Z0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Pr(i){return i!==""}function pu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace($0,K0)}var J0=new Map;function K0(i,t){let e=jt[t];if(e===void 0){let n=J0.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mc(e)}var Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(i){return i.replace(Q0,j0)}function j0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function eg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case ji:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ng(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function ig(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $l:t="ENVMAP_BLENDING_MULTIPLY";break;case Nh:t="ENVMAP_BLENDING_MIX";break;case Fh:t="ENVMAP_BLENDING_ADD";break}return t}function sg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=tg(e),c=eg(e),h=ng(e),u=ig(e),f=sg(e),d=q0(e),x=Y0(r),_=s.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Pr).join(`
`),p.length>0&&(p+=`
`)):(m=[xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),p=[xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?jt.tonemapping_pars_fragment:"",e.toneMapping!==hi?W0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,G0("linearToOutputTexel",e.outputColorSpace),X0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pr).join(`
`)),a=Mc(a),a=pu(a,e),a=mu(a,e),o=Mc(o),o=pu(o,e),o=mu(o,e),a=gu(a),o=gu(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+m+a,S=y+p+o,w=uu(s,s.VERTEX_SHADER,b),A=uu(s,s.FRAGMENT_SHADER,S);s.attachShader(_,w),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(w)||"",V=s.getShaderInfoLog(A)||"",F=L.trim(),N=O.trim(),X=V.trim(),H=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,A);else{let it=du(s,w,"vertex"),dt=du(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+it+`
`+dt)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||X==="")&&(Q=!1);Q&&(C.diagnostics={runnable:H,programLog:F,vertexShader:{log:N,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(w),s.deleteShader(A),D=new Us(s,_),M=Z0(s,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,z0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}var og=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bc(t),e.set(t,n)),n}},bc=class{constructor(t){this.id=og++,this.code=t,this.usedTimes=0}};function ag(i,t,e,n,s,r,a){let o=new rr,l=new Sc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,C,L,O){let V=L.fog,F=O.geometry,N=M.isMeshStandardMaterial?L.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||N),H=X&&X.mapping===Er?X.image.height:null,Q=x[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let it=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,dt=it!==void 0?it.length:0,Rt=0;F.morphAttributes.position!==void 0&&(Rt=1),F.morphAttributes.normal!==void 0&&(Rt=2),F.morphAttributes.color!==void 0&&(Rt=3);let tt,ct,At,q;if(Q){let me=Zn[Q];tt=me.vertexShader,ct=me.fragmentShader}else tt=M.vertexShader,ct=M.fragmentShader,l.update(M),At=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);let j=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),Et=O.isInstancedMesh===!0,rt=O.isBatchedMesh===!0,Pt=!!M.map,Jt=!!M.matcap,P=!!X,Xt=!!M.aoMap,It=!!M.lightMap,xt=!!M.bumpMap,vt=!!M.normalMap,et=!!M.displacementMap,B=!!M.emissiveMap,Z=!!M.metalnessMap,at=!!M.roughnessMap,wt=M.anisotropy>0,T=M.clearcoat>0,g=M.dispersion>0,U=M.iridescence>0,W=M.sheen>0,$=M.transmission>0,Y=wt&&!!M.anisotropyMap,yt=T&&!!M.clearcoatMap,nt=T&&!!M.clearcoatNormalMap,St=T&&!!M.clearcoatRoughnessMap,mt=U&&!!M.iridescenceMap,lt=U&&!!M.iridescenceThicknessMap,bt=W&&!!M.sheenColorMap,kt=W&&!!M.sheenRoughnessMap,Ot=!!M.specularMap,Mt=!!M.specularColorMap,Zt=!!M.specularIntensityMap,z=$&&!!M.transmissionMap,ut=$&&!!M.thicknessMap,_t=!!M.gradientMap,Nt=!!M.alphaMap,ft=M.alphaTest>0,st=!!M.alphaHash,zt=!!M.extensions,ee=hi;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ee=i.toneMapping);let ye={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:tt,fragmentShader:ct,defines:M.defines,customVertexShaderID:At,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:rt,batchingColor:rt&&O._colorsTexture!==null,instancing:Et,instancingColor:Et&&O.instanceColor!==null,instancingMorph:Et&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Gi,alphaToCoverage:!!M.alphaToCoverage,map:Pt,matcap:Jt,envMap:P,envMapMode:P&&X.mapping,envMapCubeUVHeight:H,aoMap:Xt,lightMap:It,bumpMap:xt,normalMap:vt,displacementMap:f&&et,emissiveMap:B,normalMapObjectSpace:vt&&M.normalMapType===Hh,normalMapTangentSpace:vt&&M.normalMapType===Da,metalnessMap:Z,roughnessMap:at,anisotropy:wt,anisotropyMap:Y,clearcoat:T,clearcoatMap:yt,clearcoatNormalMap:nt,clearcoatRoughnessMap:St,dispersion:g,iridescence:U,iridescenceMap:mt,iridescenceThicknessMap:lt,sheen:W,sheenColorMap:bt,sheenRoughnessMap:kt,specularMap:Ot,specularColorMap:Mt,specularIntensityMap:Zt,transmission:$,transmissionMap:z,thicknessMap:ut,gradientMap:_t,opaque:M.transparent===!1&&M.blending===ai&&M.alphaToCoverage===!1,alphaMap:Nt,alphaTest:ft,alphaHash:st,combine:M.combine,mapUv:Pt&&_(M.map.channel),aoMapUv:Xt&&_(M.aoMap.channel),lightMapUv:It&&_(M.lightMap.channel),bumpMapUv:xt&&_(M.bumpMap.channel),normalMapUv:vt&&_(M.normalMap.channel),displacementMapUv:et&&_(M.displacementMap.channel),emissiveMapUv:B&&_(M.emissiveMap.channel),metalnessMapUv:Z&&_(M.metalnessMap.channel),roughnessMapUv:at&&_(M.roughnessMap.channel),anisotropyMapUv:Y&&_(M.anisotropyMap.channel),clearcoatMapUv:yt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:kt&&_(M.sheenRoughnessMap.channel),specularMapUv:Ot&&_(M.specularMap.channel),specularColorMapUv:Mt&&_(M.specularColorMap.channel),specularIntensityMapUv:Zt&&_(M.specularIntensityMap.channel),transmissionMapUv:z&&_(M.transmissionMap.channel),thicknessMapUv:ut&&_(M.thicknessMap.channel),alphaMapUv:Nt&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(vt||wt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(Pt||Nt),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ot,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Rt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:Pt&&M.map.isVideoTexture===!0&&ce.getTransfer(M.map.colorSpace)===pe,decodeVideoTextureEmissive:B&&M.emissiveMap.isVideoTexture===!0&&ce.getTransfer(M.emissiveMap.colorSpace)===pe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===en,flipSided:M.side===tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:zt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&M.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function p(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)v.push(C),v.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(v,M),b(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function y(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function b(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){let v=x[M.type],C;if(v){let L=Zn[v];C=Xe.clone(L.uniforms)}else C=M.uniforms;return C}function w(M,v){let C;for(let L=0,O=h.length;L<O;L++){let V=h[L];if(V.cacheKey===v){C=V,++C.usedTimes;break}}return C===void 0&&(C=new rg(i,v,M,r),h.push(C)),C}function A(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:D}}function lg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function cg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _u(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,x,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,f,d,x,_,m){let p=a(u,f,d,x,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,x,_,m){let p=a(u,f,d,x,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||cg),n.length>1&&n.sort(f||vu),s.length>1&&s.sort(f||vu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function hg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new _u,i.set(n,[a])):s>=r.length?(a=new _u,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ug(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new gt};break;case"SpotLight":e={position:new I,direction:new I,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function fg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var dg=0;function pg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mg(i){let t=new ug,e=fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Gt,a=new Gt;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,x=0,_=0,m=0,p=0,y=0,b=0,S=0,w=0,A=0,R=0;c.sort(pg);for(let M=0,v=c.length;M<v;M++){let C=c[M],L=C.color,O=C.intensity,V=C.distance,F=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=L.r*O,u+=L.g*O,f+=L.b*O;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],O);R++}else if(C.isDirectionalLight){let N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,H=e.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=C.shadow.matrix,y++}n.directional[d]=N,d++}else if(C.isSpotLight){let N=t.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(L).multiplyScalar(O),N.distance=V,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[_]=N;let X=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,X.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=X.matrix,C.castShadow){let H=e.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=F,S++}_++}else if(C.isRectAreaLight){let N=t.get(C);N.color.copy(L).multiplyScalar(O),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=N,m++}else if(C.isPointLight){let N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let X=C.shadow,H=e.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[x]=H,n.pointShadowMap[x]=F,n.pointShadowMatrix[x]=C.shadow.matrix,b++}n.point[x]=N,x++}else if(C.isHemisphereLight){let N=t.get(C);N.skyColor.copy(C.color).multiplyScalar(O),N.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=N,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==d||D.pointLength!==x||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==b||D.numSpotShadows!==S||D.numSpotMaps!==w||D.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,D.directionalLength=d,D.pointLength=x,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=b,D.numSpotShadows=S,D.numSpotMaps=w,D.numLightProbes=R,n.version=dg++)}function l(c,h){let u=0,f=0,d=0,x=0,_=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let b=c[p];if(b.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(b.isSpotLight){let S=n.spot[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(b.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function yu(i){let t=new mg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function gg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new yu(i),t.set(s,[o])):r>=a.length?(o=new yu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vg=`uniform sampler2D shadow_pass;
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
}`;function _g(i,t,e){let n=new Ts,s=new Lt,r=new Lt,a=new Me,o=new yo({depthPacking:zh}),l=new Mo,c={},h=e.maxTextureSize,u={[oi]:tn,[tn]:oi,[en]:en},f=new le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:xg,fragmentShader:vg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new we;x.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ft(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let p=this.type;this.render=function(A,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(He),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=p!==Yn&&this.type===Yn,V=p===Yn&&this.type!==Yn;for(let F=0,N=A.length;F<N;F++){let X=A[F],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Q=H.getFrameExtents();if(s.multiply(Q),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,H.mapSize.y=r.y)),H.map===null||O===!0||V===!0){let dt=this.type!==Yn?{minFilter:je,magFilter:je}:{};H.map!==null&&H.map.dispose(),H.map=new Ie(s.x,s.y,dt),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let it=H.getViewportCount();for(let dt=0;dt<it;dt++){let Rt=H.getViewport(dt);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),L.viewport(a),H.updateMatrices(X,dt),n=H.getFrustum(),S(R,D,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Yn&&y(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,C)};function y(A,R){let D=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ie(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,D,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,D,d,_,null)}function b(A,R,D,M){let v=null,C=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)v=C;else if(v=D.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let L=v.uuid,O=R.uuid,V=c[L];V===void 0&&(V={},c[L]=V);let F=V[O];F===void 0&&(F=v.clone(),V[O]=F,R.addEventListener("dispose",w)),v=F}if(v.visible=R.visible,v.wireframe=R.wireframe,M===Yn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let L=i.properties.get(v);L.light=D}return v}function S(A,R,D,M,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Yn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let O=t.update(A),V=A.material;if(Array.isArray(V)){let F=O.groups;for(let N=0,X=F.length;N<X;N++){let H=F[N],Q=V[H.materialIndex];if(Q&&Q.visible){let it=b(A,Q,M,v);A.onBeforeShadow(i,A,R,D,O,it,H),i.renderBufferDirect(D,null,O,it,A,H),A.onAfterShadow(i,A,R,D,O,it,H)}}}else if(V.visible){let F=b(A,V,M,v);A.onBeforeShadow(i,A,R,D,O,F,null),i.renderBufferDirect(D,null,O,F,A,null),A.onAfterShadow(i,A,R,D,O,F,null)}}let L=A.children;for(let O=0,V=L.length;O<V;O++)S(L[O],R,D,M,v)}function w(A){A.target.removeEventListener("dispose",w);for(let D in c){let M=c[D],v=A.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var yg={[No]:Fo,[Oo]:Ho,[Bo]:ko,[Vi]:zo,[Fo]:No,[Ho]:Oo,[ko]:Bo,[zo]:Vi};function Mg(i,t){function e(){let z=!1,ut=new Me,_t=null,Nt=new Me(0,0,0,0);return{setMask:function(ft){_t!==ft&&!z&&(i.colorMask(ft,ft,ft,ft),_t=ft)},setLocked:function(ft){z=ft},setClear:function(ft,st,zt,ee,ye){ye===!0&&(ft*=ee,st*=ee,zt*=ee),ut.set(ft,st,zt,ee),Nt.equals(ut)===!1&&(i.clearColor(ft,st,zt,ee),Nt.copy(ut))},reset:function(){z=!1,_t=null,Nt.set(-1,0,0,0)}}}function n(){let z=!1,ut=!1,_t=null,Nt=null,ft=null;return{setReversed:function(st){if(ut!==st){let zt=t.get("EXT_clip_control");st?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),ut=st;let ee=ft;ft=null,this.setClear(ee)}},getReversed:function(){return ut},setTest:function(st){st?j(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(st){_t!==st&&!z&&(i.depthMask(st),_t=st)},setFunc:function(st){if(ut&&(st=yg[st]),Nt!==st){switch(st){case No:i.depthFunc(i.NEVER);break;case Fo:i.depthFunc(i.ALWAYS);break;case Oo:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Bo:i.depthFunc(i.EQUAL);break;case zo:i.depthFunc(i.GEQUAL);break;case Ho:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Nt=st}},setLocked:function(st){z=st},setClear:function(st){ft!==st&&(ut&&(st=1-st),i.clearDepth(st),ft=st)},reset:function(){z=!1,_t=null,Nt=null,ft=null,ut=!1}}}function s(){let z=!1,ut=null,_t=null,Nt=null,ft=null,st=null,zt=null,ee=null,ye=null;return{setTest:function(me){z||(me?j(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(me){ut!==me&&!z&&(i.stencilMask(me),ut=me)},setFunc:function(me,jn,Wn){(_t!==me||Nt!==jn||ft!==Wn)&&(i.stencilFunc(me,jn,Wn),_t=me,Nt=jn,ft=Wn)},setOp:function(me,jn,Wn){(st!==me||zt!==jn||ee!==Wn)&&(i.stencilOp(me,jn,Wn),st=me,zt=jn,ee=Wn)},setLocked:function(me){z=me},setClear:function(me){ye!==me&&(i.clearStencil(me),ye=me)},reset:function(){z=!1,ut=null,_t=null,Nt=null,ft=null,st=null,zt=null,ee=null,ye=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],x=null,_=!1,m=null,p=null,y=null,b=null,S=null,w=null,A=null,R=new gt(0,0,0),D=0,M=!1,v=null,C=null,L=null,O=null,V=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,X=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=X>=2);let Q=null,it={},dt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),tt=new Me().fromArray(dt),ct=new Me().fromArray(Rt);function At(z,ut,_t,Nt){let ft=new Uint8Array(4),st=i.createTexture();i.bindTexture(z,st),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<_t;zt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ut+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return st}let q={};q[i.TEXTURE_2D]=At(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=At(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=At(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=At(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Vi),xt(!1),vt(Xl),j(i.CULL_FACE),Xt(He);function j(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function ot(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Et(z,ut){return u[z]!==ut?(i.bindFramebuffer(z,ut),u[z]=ut,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function rt(z,ut){let _t=d,Nt=!1;if(z){_t=f.get(ut),_t===void 0&&(_t=[],f.set(ut,_t));let ft=z.textures;if(_t.length!==ft.length||_t[0]!==i.COLOR_ATTACHMENT0){for(let st=0,zt=ft.length;st<zt;st++)_t[st]=i.COLOR_ATTACHMENT0+st;_t.length=ft.length,Nt=!0}}else _t[0]!==i.BACK&&(_t[0]=i.BACK,Nt=!0);Nt&&i.drawBuffers(_t)}function Pt(z){return x!==z?(i.useProgram(z),x=z,!0):!1}let Jt={[En]:i.FUNC_ADD,[Mh]:i.FUNC_SUBTRACT,[Sh]:i.FUNC_REVERSE_SUBTRACT};Jt[bh]=i.MIN,Jt[Eh]=i.MAX;let P={[Ki]:i.ZERO,[wh]:i.ONE,[Th]:i.SRC_COLOR,[co]:i.SRC_ALPHA,[Ph]:i.SRC_ALPHA_SATURATE,[br]:i.DST_COLOR,[Sr]:i.DST_ALPHA,[Ah]:i.ONE_MINUS_SRC_COLOR,[ho]:i.ONE_MINUS_SRC_ALPHA,[Ch]:i.ONE_MINUS_DST_COLOR,[Rh]:i.ONE_MINUS_DST_ALPHA,[Ih]:i.CONSTANT_COLOR,[Dh]:i.ONE_MINUS_CONSTANT_COLOR,[Lh]:i.CONSTANT_ALPHA,[Uh]:i.ONE_MINUS_CONSTANT_ALPHA};function Xt(z,ut,_t,Nt,ft,st,zt,ee,ye,me){if(z===He){_===!0&&(ot(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),z!==Uo){if(z!==m||me!==M){if((p!==En||S!==En)&&(i.blendEquation(i.FUNC_ADD),p=En,S=En),me)switch(z){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,b=null,w=null,A=null,R.set(0,0,0),D=0,m=z,M=me}return}ft=ft||ut,st=st||_t,zt=zt||Nt,(ut!==p||ft!==S)&&(i.blendEquationSeparate(Jt[ut],Jt[ft]),p=ut,S=ft),(_t!==y||Nt!==b||st!==w||zt!==A)&&(i.blendFuncSeparate(P[_t],P[Nt],P[st],P[zt]),y=_t,b=Nt,w=st,A=zt),(ee.equals(R)===!1||ye!==D)&&(i.blendColor(ee.r,ee.g,ee.b,ye),R.copy(ee),D=ye),m=z,M=!1}function It(z,ut){z.side===en?ot(i.CULL_FACE):j(i.CULL_FACE);let _t=z.side===tn;ut&&(_t=!_t),xt(_t),z.blending===ai&&z.transparent===!1?Xt(He):Xt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let Nt=z.stencilWrite;o.setTest(Nt),Nt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),B(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(z){v!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),v=z)}function vt(z){z!==_h?(j(i.CULL_FACE),z!==C&&(z===Xl?i.cullFace(i.BACK):z===yh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),C=z}function et(z){z!==L&&(N&&i.lineWidth(z),L=z)}function B(z,ut,_t){z?(j(i.POLYGON_OFFSET_FILL),(O!==ut||V!==_t)&&(i.polygonOffset(ut,_t),O=ut,V=_t)):ot(i.POLYGON_OFFSET_FILL)}function Z(z){z?j(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function at(z){z===void 0&&(z=i.TEXTURE0+F-1),Q!==z&&(i.activeTexture(z),Q=z)}function wt(z,ut,_t){_t===void 0&&(Q===null?_t=i.TEXTURE0+F-1:_t=Q);let Nt=it[_t];Nt===void 0&&(Nt={type:void 0,texture:void 0},it[_t]=Nt),(Nt.type!==z||Nt.texture!==ut)&&(Q!==_t&&(i.activeTexture(_t),Q=_t),i.bindTexture(z,ut||q[z]),Nt.type=z,Nt.texture=ut)}function T(){let z=it[Q];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function St(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(z){tt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),tt.copy(z))}function kt(z){ct.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ct.copy(z))}function Ot(z,ut){let _t=c.get(ut);_t===void 0&&(_t=new WeakMap,c.set(ut,_t));let Nt=_t.get(z);Nt===void 0&&(Nt=i.getUniformBlockIndex(ut,z.name),_t.set(z,Nt))}function Mt(z,ut){let Nt=c.get(ut).get(z);l.get(ut)!==Nt&&(i.uniformBlockBinding(ut,Nt,z.__bindingPointIndex),l.set(ut,Nt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,it={},u={},f=new WeakMap,d=[],x=null,_=!1,m=null,p=null,y=null,b=null,S=null,w=null,A=null,R=new gt(0,0,0),D=0,M=!1,v=null,C=null,L=null,O=null,V=null,tt.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ot,bindFramebuffer:Et,drawBuffers:rt,useProgram:Pt,setBlending:Xt,setMaterial:It,setFlipSided:xt,setCullFace:vt,setLineWidth:et,setPolygonOffset:B,setScissorTest:Z,activeTexture:at,bindTexture:wt,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:mt,texImage3D:lt,updateUBOMapping:Ot,uniformBlockBinding:Mt,texStorage2D:nt,texStorage3D:St,texSubImage2D:W,texSubImage3D:$,compressedTexSubImage2D:Y,compressedTexSubImage3D:yt,scissor:bt,viewport:kt,reset:Zt}}function Sg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,g){return d?new OffscreenCanvas(T,g):ir("canvas")}function _(T,g,U){let W=1,$=wt(T);if(($.width>U||$.height>U)&&(W=U/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Y=Math.floor(W*$.width),yt=Math.floor(W*$.height);u===void 0&&(u=x(Y,yt));let nt=g?x(Y,yt):u;return nt.width=Y,nt.height=yt,nt.getContext("2d").drawImage(T,0,0,Y,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+yt+")."),nt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,g,U,W,$=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=g;if(g===i.RED&&(U===i.FLOAT&&(Y=i.R32F),U===i.HALF_FLOAT&&(Y=i.R16F),U===i.UNSIGNED_BYTE&&(Y=i.R8)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.R8UI),U===i.UNSIGNED_SHORT&&(Y=i.R16UI),U===i.UNSIGNED_INT&&(Y=i.R32UI),U===i.BYTE&&(Y=i.R8I),U===i.SHORT&&(Y=i.R16I),U===i.INT&&(Y=i.R32I)),g===i.RG&&(U===i.FLOAT&&(Y=i.RG32F),U===i.HALF_FLOAT&&(Y=i.RG16F),U===i.UNSIGNED_BYTE&&(Y=i.RG8)),g===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RG8UI),U===i.UNSIGNED_SHORT&&(Y=i.RG16UI),U===i.UNSIGNED_INT&&(Y=i.RG32UI),U===i.BYTE&&(Y=i.RG8I),U===i.SHORT&&(Y=i.RG16I),U===i.INT&&(Y=i.RG32I)),g===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),U===i.UNSIGNED_INT&&(Y=i.RGB32UI),U===i.BYTE&&(Y=i.RGB8I),U===i.SHORT&&(Y=i.RGB16I),U===i.INT&&(Y=i.RGB32I)),g===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),U===i.UNSIGNED_INT&&(Y=i.RGBA32UI),U===i.BYTE&&(Y=i.RGBA8I),U===i.SHORT&&(Y=i.RGBA16I),U===i.INT&&(Y=i.RGBA32I)),g===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),g===i.RGBA){let yt=$?er:ce.getTransfer(W);U===i.FLOAT&&(Y=i.RGBA32F),U===i.HALF_FLOAT&&(Y=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Y=yt===pe?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function S(T,g){let U;return T?g===null||g===Di||g===Li?U=i.DEPTH24_STENCIL8:g===Hn?U=i.DEPTH32F_STENCIL8:g===Ps&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Di||g===Li?U=i.DEPTH_COMPONENT24:g===Hn?U=i.DEPTH_COMPONENT32F:g===Ps&&(U=i.DEPTH_COMPONENT16),U}function w(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==je&&T.minFilter!==zn?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function A(T){let g=T.target;g.removeEventListener("dispose",A),D(g),g.isVideoTexture&&h.delete(g)}function R(T){let g=T.target;g.removeEventListener("dispose",R),v(g)}function D(T){let g=n.get(T);if(g.__webglInit===void 0)return;let U=T.source,W=f.get(U);if(W){let $=W[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(T),Object.keys(W).length===0&&f.delete(U)}n.remove(T)}function M(T){let g=n.get(T);i.deleteTexture(g.__webglTexture);let U=T.source,W=f.get(U);delete W[g.__cacheKey],a.memory.textures--}function v(T){let g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let $=0;$<g.__webglFramebuffer[W].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[W][$]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let U=T.textures;for(let W=0,$=U.length;W<$;W++){let Y=n.get(U[W]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(U[W])}n.remove(T)}let C=0;function L(){C=0}function O(){let T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function V(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function F(T,g){let U=n.get(T);if(T.isVideoTexture&&Z(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){let W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,T,g);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function N(T,g){let U=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){q(U,T,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function X(T,g){let U=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){q(U,T,g);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function H(T,g){let U=n.get(T);if(T.version>0&&U.__version!==T.version){j(U,T,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}let Q={[Dn]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[uo]:i.MIRRORED_REPEAT},it={[je]:i.NEAREST,[Oh]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Jo]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},dt={[kh]:i.NEVER,[Yh]:i.ALWAYS,[Vh]:i.LESS,[sc]:i.LEQUAL,[Gh]:i.EQUAL,[qh]:i.GEQUAL,[Wh]:i.GREATER,[Xh]:i.NOTEQUAL};function Rt(T,g){if(g.type===Hn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===zn||g.magFilter===Jo||g.magFilter===wr||g.magFilter===Ii||g.minFilter===zn||g.minFilter===Jo||g.minFilter===wr||g.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Q[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Q[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Q[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,it[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,it[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,dt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===je||g.minFilter!==wr&&g.minFilter!==Ii||g.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function tt(T,g){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",A));let W=g.source,$=f.get(W);$===void 0&&($={},f.set(W,$));let Y=V(g);if(Y!==T.__cacheKey){$[Y]===void 0&&($[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[Y].usedTimes++;let yt=$[T.__cacheKey];yt!==void 0&&($[T.__cacheKey].usedTimes--,yt.usedTimes===0&&M(g)),T.__cacheKey=Y,T.__webglTexture=$[Y].texture}return U}function ct(T,g,U){return Math.floor(Math.floor(T/U)/g)}function At(T,g,U,W){let Y=T.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,U,W,g.data);else{Y.sort((lt,bt)=>lt.start-bt.start);let yt=0;for(let lt=1;lt<Y.length;lt++){let bt=Y[yt],kt=Y[lt],Ot=bt.start+bt.count,Mt=ct(kt.start,g.width,4),Zt=ct(bt.start,g.width,4);kt.start<=Ot+1&&Mt===Zt&&ct(kt.start+kt.count-1,g.width,4)===Mt?bt.count=Math.max(bt.count,kt.start+kt.count-bt.start):(++yt,Y[yt]=kt)}Y.length=yt+1;let nt=i.getParameter(i.UNPACK_ROW_LENGTH),St=i.getParameter(i.UNPACK_SKIP_PIXELS),mt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let lt=0,bt=Y.length;lt<bt;lt++){let kt=Y[lt],Ot=Math.floor(kt.start/4),Mt=Math.ceil(kt.count/4),Zt=Ot%g.width,z=Math.floor(Ot/g.width),ut=Mt,_t=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Zt,z,ut,_t,U,W,g.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,nt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,St),i.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function q(T,g,U){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);let $=tt(T,g),Y=g.source;e.bindTexture(W,T.__webglTexture,i.TEXTURE0+U);let yt=n.get(Y);if(Y.version!==yt.__version||$===!0){e.activeTexture(i.TEXTURE0+U);let nt=ce.getPrimaries(ce.workingColorSpace),St=g.colorSpace===ui?null:ce.getPrimaries(g.colorSpace),mt=g.colorSpace===ui||nt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let lt=_(g.image,!1,s.maxTextureSize);lt=at(g,lt);let bt=r.convert(g.format,g.colorSpace),kt=r.convert(g.type),Ot=b(g.internalFormat,bt,kt,g.colorSpace,g.isVideoTexture);Rt(W,g);let Mt,Zt=g.mipmaps,z=g.isVideoTexture!==!0,ut=yt.__version===void 0||$===!0,_t=Y.dataReady,Nt=w(g,lt);if(g.isDepthTexture)Ot=S(g.format===Ui,g.type),ut&&(z?e.texStorage2D(i.TEXTURE_2D,1,Ot,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,lt.width,lt.height,0,bt,kt,null));else if(g.isDataTexture)if(Zt.length>0){z&&ut&&e.texStorage2D(i.TEXTURE_2D,Nt,Ot,Zt[0].width,Zt[0].height);for(let ft=0,st=Zt.length;ft<st;ft++)Mt=Zt[ft],z?_t&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Mt.width,Mt.height,bt,kt,Mt.data):e.texImage2D(i.TEXTURE_2D,ft,Ot,Mt.width,Mt.height,0,bt,kt,Mt.data);g.generateMipmaps=!1}else z?(ut&&e.texStorage2D(i.TEXTURE_2D,Nt,Ot,lt.width,lt.height),_t&&At(g,lt,bt,kt)):e.texImage2D(i.TEXTURE_2D,0,Ot,lt.width,lt.height,0,bt,kt,lt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){z&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,Ot,Zt[0].width,Zt[0].height,lt.depth);for(let ft=0,st=Zt.length;ft<st;ft++)if(Mt=Zt[ft],g.format!==xn)if(bt!==null)if(z){if(_t)if(g.layerUpdates.size>0){let zt=uc(Mt.width,Mt.height,g.format,g.type);for(let ee of g.layerUpdates){let ye=Mt.data.subarray(ee*zt/Mt.data.BYTES_PER_ELEMENT,(ee+1)*zt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,ee,Mt.width,Mt.height,1,bt,ye)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Mt.width,Mt.height,lt.depth,bt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Ot,Mt.width,Mt.height,lt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?_t&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Mt.width,Mt.height,lt.depth,bt,kt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Ot,Mt.width,Mt.height,lt.depth,0,bt,kt,Mt.data)}else{z&&ut&&e.texStorage2D(i.TEXTURE_2D,Nt,Ot,Zt[0].width,Zt[0].height);for(let ft=0,st=Zt.length;ft<st;ft++)Mt=Zt[ft],g.format!==xn?bt!==null?z?_t&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Mt.width,Mt.height,bt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Ot,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?_t&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Mt.width,Mt.height,bt,kt,Mt.data):e.texImage2D(i.TEXTURE_2D,ft,Ot,Mt.width,Mt.height,0,bt,kt,Mt.data)}else if(g.isDataArrayTexture)if(z){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,Ot,lt.width,lt.height,lt.depth),_t)if(g.layerUpdates.size>0){let ft=uc(lt.width,lt.height,g.format,g.type);for(let st of g.layerUpdates){let zt=lt.data.subarray(st*ft/lt.data.BYTES_PER_ELEMENT,(st+1)*ft/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,lt.width,lt.height,1,bt,kt,zt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,kt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,lt.width,lt.height,lt.depth,0,bt,kt,lt.data);else if(g.isData3DTexture)z?(ut&&e.texStorage3D(i.TEXTURE_3D,Nt,Ot,lt.width,lt.height,lt.depth),_t&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,kt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,lt.width,lt.height,lt.depth,0,bt,kt,lt.data);else if(g.isFramebufferTexture){if(ut)if(z)e.texStorage2D(i.TEXTURE_2D,Nt,Ot,lt.width,lt.height);else{let ft=lt.width,st=lt.height;for(let zt=0;zt<Nt;zt++)e.texImage2D(i.TEXTURE_2D,zt,Ot,ft,st,0,bt,kt,null),ft>>=1,st>>=1}}else if(Zt.length>0){if(z&&ut){let ft=wt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,Nt,Ot,ft.width,ft.height)}for(let ft=0,st=Zt.length;ft<st;ft++)Mt=Zt[ft],z?_t&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,bt,kt,Mt):e.texImage2D(i.TEXTURE_2D,ft,Ot,bt,kt,Mt);g.generateMipmaps=!1}else if(z){if(ut){let ft=wt(lt);e.texStorage2D(i.TEXTURE_2D,Nt,Ot,ft.width,ft.height)}_t&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,kt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,bt,kt,lt);m(g)&&p(W),yt.__version=Y.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function j(T,g,U){if(g.image.length!==6)return;let W=tt(T,g),$=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+U);let Y=n.get($);if($.version!==Y.__version||W===!0){e.activeTexture(i.TEXTURE0+U);let yt=ce.getPrimaries(ce.workingColorSpace),nt=g.colorSpace===ui?null:ce.getPrimaries(g.colorSpace),St=g.colorSpace===ui||yt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let mt=g.isCompressedTexture||g.image[0].isCompressedTexture,lt=g.image[0]&&g.image[0].isDataTexture,bt=[];for(let st=0;st<6;st++)!mt&&!lt?bt[st]=_(g.image[st],!0,s.maxCubemapSize):bt[st]=lt?g.image[st].image:g.image[st],bt[st]=at(g,bt[st]);let kt=bt[0],Ot=r.convert(g.format,g.colorSpace),Mt=r.convert(g.type),Zt=b(g.internalFormat,Ot,Mt,g.colorSpace),z=g.isVideoTexture!==!0,ut=Y.__version===void 0||W===!0,_t=$.dataReady,Nt=w(g,kt);Rt(i.TEXTURE_CUBE_MAP,g);let ft;if(mt){z&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,Zt,kt.width,kt.height);for(let st=0;st<6;st++){ft=bt[st].mipmaps;for(let zt=0;zt<ft.length;zt++){let ee=ft[zt];g.format!==xn?Ot!==null?z?_t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,0,0,ee.width,ee.height,Ot,ee.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,Zt,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,0,0,ee.width,ee.height,Ot,Mt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,Zt,ee.width,ee.height,0,Ot,Mt,ee.data)}}}else{if(ft=g.mipmaps,z&&ut){ft.length>0&&Nt++;let st=wt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,Zt,st.width,st.height)}for(let st=0;st<6;st++)if(lt){z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,bt[st].width,bt[st].height,Ot,Mt,bt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,bt[st].width,bt[st].height,0,Ot,Mt,bt[st].data);for(let zt=0;zt<ft.length;zt++){let ye=ft[zt].image[st].image;z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,0,0,ye.width,ye.height,Ot,Mt,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,Zt,ye.width,ye.height,0,Ot,Mt,ye.data)}}else{z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ot,Mt,bt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,Ot,Mt,bt[st]);for(let zt=0;zt<ft.length;zt++){let ee=ft[zt];z?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,0,0,Ot,Mt,ee.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,Zt,Ot,Mt,ee.image[st])}}}m(g)&&p(i.TEXTURE_CUBE_MAP),Y.__version=$.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ot(T,g,U,W,$,Y){let yt=r.convert(U.format,U.colorSpace),nt=r.convert(U.type),St=b(U.internalFormat,yt,nt,U.colorSpace),mt=n.get(g),lt=n.get(U);if(lt.__renderTarget=g,!mt.__hasExternalTextures){let bt=Math.max(1,g.width>>Y),kt=Math.max(1,g.height>>Y);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,Y,St,bt,kt,g.depth,0,yt,nt,null):e.texImage2D($,Y,St,bt,kt,0,yt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),B(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,$,lt.__webglTexture,0,et(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,$,lt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(T,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){let W=g.depthTexture,$=W&&W.isDepthTexture?W.type:null,Y=S(g.stencilBuffer,$),yt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=et(g);B(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Y,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Y,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Y,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,T)}else{let W=g.textures;for(let $=0;$<W.length;$++){let Y=W[$],yt=r.convert(Y.format,Y.colorSpace),nt=r.convert(Y.type),St=b(Y.internalFormat,yt,nt,Y.colorSpace),mt=et(g);U&&B(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,St,g.width,g.height):B(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,St,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,St,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(g.depthTexture);W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),F(g.depthTexture,0);let $=W.__webglTexture,Y=et(g);if(g.depthTexture.format===Ss)B(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(g.depthTexture.format===Ui)B(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Pt(T){let g=n.get(T),U=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let W=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){let $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=W}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let W=T.texture.mipmaps;W&&W.length>0?rt(g.__webglFramebuffer[0],T):rt(g.__webglFramebuffer,T)}else if(U){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),Et(g.__webglDepthbuffer[W],T,!1);else{let $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Y)}}else{let W=T.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Et(g.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(T,g,U){let W=n.get(T);g!==void 0&&ot(W.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Pt(T)}function P(T){let g=T.texture,U=n.get(T),W=n.get(g);T.addEventListener("dispose",R);let $=T.textures,Y=T.isWebGLCubeRenderTarget===!0,yt=$.length>1;if(yt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),Y){U.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[nt]=[];for(let St=0;St<g.mipmaps.length;St++)U.__webglFramebuffer[nt][St]=i.createFramebuffer()}else U.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let nt=0;nt<g.mipmaps.length;nt++)U.__webglFramebuffer[nt]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(yt)for(let nt=0,St=$.length;nt<St;nt++){let mt=n.get($[nt]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&B(T)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let nt=0;nt<$.length;nt++){let St=$[nt];U.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[nt]);let mt=r.convert(St.format,St.colorSpace),lt=r.convert(St.type),bt=b(St.internalFormat,mt,lt,St.colorSpace,T.isXRRenderTarget===!0),kt=et(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,bt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,U.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(U.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,g);for(let nt=0;nt<6;nt++)if(g.mipmaps&&g.mipmaps.length>0)for(let St=0;St<g.mipmaps.length;St++)ot(U.__webglFramebuffer[nt][St],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St);else ot(U.__webglFramebuffer[nt],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(g)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let nt=0,St=$.length;nt<St;nt++){let mt=$[nt],lt=n.get(mt),bt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(bt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,lt.__webglTexture),Rt(bt,mt),ot(U.__webglFramebuffer,T,mt,i.COLOR_ATTACHMENT0+nt,bt,0),m(mt)&&p(bt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(nt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,W.__webglTexture),Rt(nt,g),g.mipmaps&&g.mipmaps.length>0)for(let St=0;St<g.mipmaps.length;St++)ot(U.__webglFramebuffer[St],T,g,i.COLOR_ATTACHMENT0,nt,St);else ot(U.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,nt,0);m(g)&&p(nt),e.unbindTexture()}T.depthBuffer&&Pt(T)}function Xt(T){let g=T.textures;for(let U=0,W=g.length;U<W;U++){let $=g[U];if(m($)){let Y=y(T),yt=n.get($).__webglTexture;e.bindTexture(Y,yt),p(Y),e.unbindTexture()}}}let It=[],xt=[];function vt(T){if(T.samples>0){if(B(T)===!1){let g=T.textures,U=T.width,W=T.height,$=i.COLOR_BUFFER_BIT,Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(T),nt=g.length>1;if(nt)for(let mt=0;mt<g.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let St=T.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let mt=0;mt<g.length;mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);let lt=n.get(g[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,U,W,0,0,U,W,$,i.NEAREST),l===!0&&(It.length=0,xt.length=0,It.push(i.COLOR_ATTACHMENT0+mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(It.push(Y),xt.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let mt=0;mt<g.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);let lt=n.get(g[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function et(T){return Math.min(s.maxSamples,T.samples)}function B(T){let g=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Z(T){let g=a.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function at(T,g){let U=T.colorSpace,W=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==Gi&&U!==ui&&(ce.getTransfer(U)===pe?(W!==xn||$!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}function wt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=Jt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=B}function bg(i,t){function e(n,s=ui){let r,a=ce.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kl)return i.BYTE;if(n===Ql)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===Ko)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===We)return i.HALF_FLOAT;if(n===ec)return i.ALPHA;if(n===nc)return i.RGB;if(n===xn)return i.RGBA;if(n===Ss)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===ta)return i.RED;if(n===ea)return i.RED_INTEGER;if(n===ic)return i.RG;if(n===na)return i.RG_INTEGER;if(n===ia)return i.RGBA_INTEGER;if(n===Tr||n===Ar||n===Rr||n===Cr)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===ra||n===oa||n===aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===la||n===ca||n===ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===la||n===ca)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ha)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ua||n===fa||n===da||n===pa||n===ma||n===ga||n===xa||n===va||n===_a||n===ya||n===Ma||n===Sa||n===ba||n===Ea)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ua)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===va)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ba)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===Ta||n===Aa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wa)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ra||n===Ca||n===Pa||n===Ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wg=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new le({vertexShader:Eg,fragmentShader:wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new Se(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends li{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null,_=typeof XRWebGLBinding<"u",m=new Ec,p={},y=e.getContextAttributes(),b=null,S=null,w=[],A=[],R=new Lt,D=null,M=new Ge;M.viewport=new Me;let v=new Ge;v.viewport=new Me;let C=[M,v],L=new Do,O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=w[q];return j===void 0&&(j=new ws,w[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=w[q];return j===void 0&&(j=new ws,w[q]=j),j.getGripSpace()},this.getHand=function(q){let j=w[q];return j===void 0&&(j=new ws,w[q]=j),j.getHandSpace()};function F(q){let j=A.indexOf(q.inputSource);if(j===-1)return;let ot=w[j];ot!==void 0&&(ot.update(q.inputSource,q.frame,c||a),ot.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",X);for(let q=0;q<w.length;q++){let j=A[q];j!==null&&(A[q]=null,w[q].disconnect(j))}O=null,V=null,m.reset();for(let q in p)delete p[q];t.setRenderTarget(b),d=null,f=null,u=null,s=null,S=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",N),s.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Et=null,rt=null;y.depth&&(rt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=y.stencil?Ui:Ss,Et=y.stencil?Li:Di);let Pt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Ie(f.textureWidth,f.textureHeight,{format:xn,type:Tn,depthTexture:new Yi(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ot={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Ie(d.framebufferWidth,d.framebufferHeight,{format:xn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),At.setContext(s),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(q){for(let j=0;j<q.removed.length;j++){let ot=q.removed[j],Et=A.indexOf(ot);Et>=0&&(A[Et]=null,w[Et].disconnect(ot))}for(let j=0;j<q.added.length;j++){let ot=q.added[j],Et=A.indexOf(ot);if(Et===-1){for(let Pt=0;Pt<w.length;Pt++)if(Pt>=A.length){A.push(ot),Et=Pt;break}else if(A[Pt]===null){A[Pt]=ot,Et=Pt;break}if(Et===-1)break}let rt=w[Et];rt&&rt.connect(ot)}}let H=new I,Q=new I;function it(q,j,ot){H.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(ot.matrixWorld);let Et=H.distanceTo(Q),rt=j.projectionMatrix.elements,Pt=ot.projectionMatrix.elements,Jt=rt[14]/(rt[10]-1),P=rt[14]/(rt[10]+1),Xt=(rt[9]+1)/rt[5],It=(rt[9]-1)/rt[5],xt=(rt[8]-1)/rt[0],vt=(Pt[8]+1)/Pt[0],et=Jt*xt,B=Jt*vt,Z=Et/(-xt+vt),at=Z*-xt;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(at),q.translateZ(Z),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),rt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let wt=Jt+Z,T=P+Z,g=et-at,U=B+(Et-at),W=Xt*P/T*wt,$=It*P/T*wt;q.projectionMatrix.makePerspective(g,U,W,$,wt,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function dt(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,ot=q.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),L.near=v.near=M.near=j,L.far=v.far=M.far=ot,(O!==L.near||V!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),O=L.near,V=L.far),L.layers.mask=q.layers.mask|6,M.layers.mask=L.layers.mask&3,v.layers.mask=L.layers.mask&5;let Et=q.parent,rt=L.cameras;dt(L,Et);for(let Pt=0;Pt<rt.length;Pt++)dt(rt[Pt],Et);rt.length===2?it(L,M,v):L.projectionMatrix.copy(M.projectionMatrix),Rt(q,L,Et)};function Rt(q,j,ot){ot===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ot.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Wi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(q){return p[q]};let tt=null;function ct(q,j){if(h=j.getViewerPose(c||a),x=j,h!==null){let ot=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Et=!1;ot.length!==L.cameras.length&&(L.cameras.length=0,Et=!0);for(let P=0;P<ot.length;P++){let Xt=ot[P],It=null;if(d!==null)It=d.getViewport(Xt);else{let vt=u.getViewSubImage(f,Xt);It=vt.viewport,P===0&&(t.setRenderTargetTextures(S,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(S))}let xt=C[P];xt===void 0&&(xt=new Ge,xt.layers.enable(P),xt.viewport=new Me,C[P]=xt),xt.matrix.fromArray(Xt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Xt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(It.x,It.y,It.width,It.height),P===0&&(L.matrix.copy(xt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Et===!0&&L.cameras.push(xt)}let rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let P=u.getDepthInformation(ot[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(rt&&rt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let P=0;P<ot.length;P++){let Xt=ot[P].camera;if(Xt){let It=p[Xt];It||(It=new ur,p[Xt]=It);let xt=u.getCameraImage(Xt);It.sourceTexture=xt}}}}for(let ot=0;ot<w.length;ot++){let Et=A[ot],rt=w[ot];Et!==null&&rt!==void 0&&rt.update(Et,j,c||a)}tt&&tt(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),x=null}let At=new Mu;At.setAnimationLoop(ct),this.setAnimationLoop=function(q){tt=q},this.dispose=function(){}}},ns=new fn,Tg=new Gt;function Ag(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),b=y.envMap,S=y.envMapRotation;b&&(m.envMap.value=b,ns.copy(S),ns.x*=-1,ns.y*=-1,ns.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(ns)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let S=b.program;n.uniformBlockBinding(y,S)}function c(y,b){let S=s[y.id];S===void 0&&(x(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",m));let w=b.program;n.updateUBOMapping(y,w);let A=t.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){let b=u();y.__bindingPointIndex=b;let S=i.createBuffer(),w=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let b=s[y.id],S=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,R=S.length;A<R;A++){let D=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,v=D.length;M<v;M++){let C=D[M];if(d(C,A,M,w)===!0){let L=C.__offset,O=Array.isArray(C.value)?C.value:[C.value],V=0;for(let F=0;F<O.length;F++){let N=O[F],X=_(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,L+V,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):(N.toArray(C.__data,V),V+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,b,S,w){let A=y.value,R=b+"_"+S;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{let D=w[R];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return w[R]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function x(y){let b=y.uniforms,S=0,w=16;for(let R=0,D=b.length;R<D;R++){let M=Array.isArray(b[R])?b[R]:[b[R]];for(let v=0,C=M.length;v<C;v++){let L=M[v],O=Array.isArray(L.value)?L.value:[L.value];for(let V=0,F=O.length;V<F;V++){let N=O[V],X=_(N),H=S%w,Q=H%X.boundary,it=H+Q;S+=Q,it!==0&&w-it<X.storage&&(S+=w-it),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=X.storage}}}let A=S%w;return A>0&&(S+=w-A),y.__size=S,y.__cache={},this}function _(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){let b=y.target;b.removeEventListener("dispose",m);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Fa=class{constructor(t={}){let{canvas:e=Zh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let x=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,y=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,w=!1;this._outputColorSpace=Qe;let A=0,R=0,D=null,M=-1,v=null,C=new Me,L=new Me,O=null,V=new gt(0),F=0,N=e.width,X=e.height,H=1,Q=null,it=null,dt=new Me(0,0,N,X),Rt=new Me(0,0,N,X),tt=!1,ct=new Ts,At=!1,q=!1,j=new Gt,ot=new I,Et=new Me,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function Jt(){return D===null?H:1}let P=n;function Xt(E,k){return e.getContext(E,k)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),P===null){let k="webgl2";if(P=Xt(k,E),P===null)throw Xt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let It,xt,vt,et,B,Z,at,wt,T,g,U,W,$,Y,yt,nt,St,mt,lt,bt,kt,Ot,Mt,Zt;function z(){It=new qm(P),It.init(),Ot=new bg(P,It),xt=new zm(P,It,t,Ot),vt=new Mg(P,It),xt.reversedDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),et=new $m(P),B=new lg,Z=new Sg(P,It,vt,B,xt,Ot,et),at=new km(S),wt=new Xm(S),T=new ed(P),Mt=new Om(P,T),g=new Ym(P,T,et,Mt),U=new Km(P,g,T,et),lt=new Jm(P,xt,Z),nt=new Hm(B),W=new ag(S,at,wt,It,xt,Mt,nt),$=new Ag(S,B),Y=new hg,yt=new gg(It),mt=new Fm(S,at,wt,vt,U,d,l),St=new _g(S,U,xt),Zt=new Rg(P,et,xt,vt),bt=new Bm(P,It,et),kt=new Zm(P,It,et),et.programs=W.programs,S.capabilities=xt,S.extensions=It,S.properties=B,S.renderLists=Y,S.shadowMap=St,S.state=vt,S.info=et}z();let ut=new wc(S,P);this.xr=ut,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=It.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=It.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(N,X,!1))},this.getSize=function(E){return E.set(N,X)},this.setSize=function(E,k,J=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,X=k,e.width=Math.floor(E*H),e.height=Math.floor(k*H),J===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(N*H,X*H).floor()},this.setDrawingBufferSize=function(E,k,J){N=E,X=k,H=J,e.width=Math.floor(E*J),e.height=Math.floor(k*J),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(dt)},this.setViewport=function(E,k,J,K){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,k,J,K),vt.viewport(C.copy(dt).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,k,J,K){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,k,J,K),vt.scissor(L.copy(Rt).multiplyScalar(H).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(E){vt.setScissorTest(tt=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){it=E},this.getClearColor=function(E){return E.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,J=!0){let K=0;if(E){let G=!1;if(D!==null){let pt=D.texture.format;G=pt===ia||pt===na||pt===ea}if(G){let pt=D.texture.type,Ct=pt===Tn||pt===Di||pt===Ps||pt===Li||pt===Qo||pt===jo,Bt=mt.getClearColor(),Ut=mt.getClearAlpha(),Kt=Bt.r,Qt=Bt.g,qt=Bt.b;Ct?(x[0]=Kt,x[1]=Qt,x[2]=qt,x[3]=Ut,P.clearBufferuiv(P.COLOR,0,x)):(_[0]=Kt,_[1]=Qt,_[2]=qt,_[3]=Ut,P.clearBufferiv(P.COLOR,0,_))}else K|=P.COLOR_BUFFER_BIT}k&&(K|=P.DEPTH_BUFFER_BIT),J&&(K|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),mt.dispose(),Y.dispose(),yt.dispose(),B.dispose(),at.dispose(),wt.dispose(),U.dispose(),Mt.dispose(),Zt.dispose(),W.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Wn),ut.removeEventListener("sessionend",Xc),Ni.stop()};function _t(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=et.autoReset,k=St.enabled,J=St.autoUpdate,K=St.needsUpdate,G=St.type;z(),et.autoReset=E,St.enabled=k,St.autoUpdate=J,St.needsUpdate=K,St.type=G}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function st(E){let k=E.target;k.removeEventListener("dispose",st),zt(k)}function zt(E){ee(E),B.remove(E)}function ee(E){let k=B.get(E).programs;k!==void 0&&(k.forEach(function(J){W.releaseProgram(J)}),E.isShaderMaterial&&W.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,J,K,G,pt){k===null&&(k=rt);let Ct=G.isMesh&&G.matrixWorld.determinant()<0,Bt=Zu(E,k,J,K,G);vt.setMaterial(K,Ct);let Ut=J.index,Kt=1;if(K.wireframe===!0){if(Ut=g.getWireframeAttribute(J),Ut===void 0)return;Kt=2}let Qt=J.drawRange,qt=J.attributes.position,ae=Qt.start*Kt,ve=(Qt.start+Qt.count)*Kt;pt!==null&&(ae=Math.max(ae,pt.start*Kt),ve=Math.min(ve,(pt.start+pt.count)*Kt)),Ut!==null?(ae=Math.max(ae,0),ve=Math.min(ve,Ut.count)):qt!=null&&(ae=Math.max(ae,0),ve=Math.min(ve,qt.count));let Ue=ve-ae;if(Ue<0||Ue===1/0)return;Mt.setup(G,K,Bt,J,Ut);let be,_e=bt;if(Ut!==null&&(be=T.get(Ut),_e=kt,_e.setIndex(be)),G.isMesh)K.wireframe===!0?(vt.setLineWidth(K.wireframeLinewidth*Jt()),_e.setMode(P.LINES)):_e.setMode(P.TRIANGLES);else if(G.isLine){let $t=K.linewidth;$t===void 0&&($t=1),vt.setLineWidth($t*Jt()),G.isLineSegments?_e.setMode(P.LINES):G.isLineLoop?_e.setMode(P.LINE_LOOP):_e.setMode(P.LINE_STRIP)}else G.isPoints?_e.setMode(P.POINTS):G.isSprite&&_e.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))_e.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let $t=G._multiDrawStarts,Re=G._multiDrawCounts,de=G._multiDrawCount,yn=Ut?T.get(Ut).bytesPerElement:1,os=B.get(K).currentProgram.getUniforms();for(let Mn=0;Mn<de;Mn++)os.setValue(P,"_gl_DrawID",Mn),_e.render($t[Mn]/yn,Re[Mn])}else if(G.isInstancedMesh)_e.renderInstances(ae,Ue,G.count);else if(J.isInstancedBufferGeometry){let $t=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Re=Math.min(J.instanceCount,$t);_e.renderInstances(ae,Ue,Re)}else _e.render(ae,Ue)};function ye(E,k,J){E.transparent===!0&&E.side===en&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,Vr(E,k,J),E.side=oi,E.needsUpdate=!0,Vr(E,k,J),E.side=en):Vr(E,k,J)}this.compile=function(E,k,J=null){J===null&&(J=E),p=yt.get(J),p.init(k),b.push(p),J.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),E!==J&&E.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let K=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let pt=G.material;if(pt)if(Array.isArray(pt))for(let Ct=0;Ct<pt.length;Ct++){let Bt=pt[Ct];ye(Bt,J,G),K.add(Bt)}else ye(pt,J,G),K.add(pt)}),p=b.pop(),K},this.compileAsync=function(E,k,J=null){let K=this.compile(E,k,J);return new Promise(G=>{function pt(){if(K.forEach(function(Ct){B.get(Ct).currentProgram.isReady()&&K.delete(Ct)}),K.size===0){G(E);return}setTimeout(pt,10)}It.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let me=null;function jn(E){me&&me(E)}function Wn(){Ni.stop()}function Xc(){Ni.start()}let Ni=new Mu;Ni.setAnimationLoop(jn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(E){me=E,ut.setAnimationLoop(E),E===null?Ni.stop():Ni.start()},ut.addEventListener("sessionstart",Wn),ut.addEventListener("sessionend",Xc),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(k),k=ut.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,k,D),p=yt.get(E,b.length),p.init(k),b.push(p),j.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ct.setFromProjectionMatrix(j,Bn,k.reversedDepth),q=this.localClippingEnabled,At=nt.init(this.clippingPlanes,q),m=Y.get(E,y.length),m.init(),y.push(m),ut.enabled===!0&&ut.isPresenting===!0){let pt=S.xr.getDepthSensingMesh();pt!==null&&dl(pt,k,-1/0,S.sortObjects)}dl(E,k,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(Q,it),Pt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Pt&&mt.addToRenderList(m,E),this.info.render.frame++,At===!0&&nt.beginShadows();let J=p.state.shadowsArray;St.render(J,E,k),At===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=m.opaque,G=m.transmissive;if(p.setupLights(),k.isArrayCamera){let pt=k.cameras;if(G.length>0)for(let Ct=0,Bt=pt.length;Ct<Bt;Ct++){let Ut=pt[Ct];Yc(K,G,E,Ut)}Pt&&mt.render(E);for(let Ct=0,Bt=pt.length;Ct<Bt;Ct++){let Ut=pt[Ct];qc(m,E,Ut,Ut.viewport)}}else G.length>0&&Yc(K,G,E,k),Pt&&mt.render(E),qc(m,E,k);D!==null&&R===0&&(Z.updateMultisampleRenderTarget(D),Z.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(S,E,k),Mt.resetDefaultState(),M=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],At===!0&&nt.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function dl(E,k,J,K){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ct.intersectsSprite(E)){K&&Et.setFromMatrixPosition(E.matrixWorld).applyMatrix4(j);let Ct=U.update(E),Bt=E.material;Bt.visible&&m.push(E,Ct,Bt,J,Et.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ct.intersectsObject(E))){let Ct=U.update(E),Bt=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Et.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Et.copy(Ct.boundingSphere.center)),Et.applyMatrix4(E.matrixWorld).applyMatrix4(j)),Array.isArray(Bt)){let Ut=Ct.groups;for(let Kt=0,Qt=Ut.length;Kt<Qt;Kt++){let qt=Ut[Kt],ae=Bt[qt.materialIndex];ae&&ae.visible&&m.push(E,Ct,ae,J,Et.z,qt)}}else Bt.visible&&m.push(E,Ct,Bt,J,Et.z,null)}}let pt=E.children;for(let Ct=0,Bt=pt.length;Ct<Bt;Ct++)dl(pt[Ct],k,J,K)}function qc(E,k,J,K){let G=E.opaque,pt=E.transmissive,Ct=E.transparent;p.setupLightsView(J),At===!0&&nt.setGlobalState(S.clippingPlanes,J),K&&vt.viewport(C.copy(K)),G.length>0&&kr(G,k,J),pt.length>0&&kr(pt,k,J),Ct.length>0&&kr(Ct,k,J),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Yc(E,k,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Ie(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?We:Tn,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let pt=p.state.transmissionRenderTarget[K.id],Ct=K.viewport||C;pt.setSize(Ct.z*S.transmissionResolutionScale,Ct.w*S.transmissionResolutionScale);let Bt=S.getRenderTarget(),Ut=S.getActiveCubeFace(),Kt=S.getActiveMipmapLevel();S.setRenderTarget(pt),S.getClearColor(V),F=S.getClearAlpha(),F<1&&S.setClearColor(16777215,.5),S.clear(),Pt&&mt.render(J);let Qt=S.toneMapping;S.toneMapping=hi;let qt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),At===!0&&nt.setGlobalState(S.clippingPlanes,K),kr(E,J,K),Z.updateMultisampleRenderTarget(pt),Z.updateRenderTargetMipmap(pt),It.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let ve=0,Ue=k.length;ve<Ue;ve++){let be=k[ve],_e=be.object,$t=be.geometry,Re=be.material,de=be.group;if(Re.side===en&&_e.layers.test(K.layers)){let yn=Re.side;Re.side=tn,Re.needsUpdate=!0,Zc(_e,J,K,$t,Re,de),Re.side=yn,Re.needsUpdate=!0,ae=!0}}ae===!0&&(Z.updateMultisampleRenderTarget(pt),Z.updateRenderTargetMipmap(pt))}S.setRenderTarget(Bt,Ut,Kt),S.setClearColor(V,F),qt!==void 0&&(K.viewport=qt),S.toneMapping=Qt}function kr(E,k,J){let K=k.isScene===!0?k.overrideMaterial:null;for(let G=0,pt=E.length;G<pt;G++){let Ct=E[G],Bt=Ct.object,Ut=Ct.geometry,Kt=Ct.group,Qt=Ct.material;Qt.allowOverride===!0&&K!==null&&(Qt=K),Bt.layers.test(J.layers)&&Zc(Bt,k,J,Ut,Qt,Kt)}}function Zc(E,k,J,K,G,pt){E.onBeforeRender(S,k,J,K,G,pt),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(S,k,J,K,E,pt),G.transparent===!0&&G.side===en&&G.forceSinglePass===!1?(G.side=tn,G.needsUpdate=!0,S.renderBufferDirect(J,k,K,G,E,pt),G.side=oi,G.needsUpdate=!0,S.renderBufferDirect(J,k,K,G,E,pt),G.side=en):S.renderBufferDirect(J,k,K,G,E,pt),E.onAfterRender(S,k,J,K,G,pt)}function Vr(E,k,J){k.isScene!==!0&&(k=rt);let K=B.get(E),G=p.state.lights,pt=p.state.shadowsArray,Ct=G.state.version,Bt=W.getParameters(E,G.state,pt,k,J),Ut=W.getProgramCacheKey(Bt),Kt=K.programs;K.environment=E.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(E.isMeshStandardMaterial?wt:at).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Kt===void 0&&(E.addEventListener("dispose",st),Kt=new Map,K.programs=Kt);let Qt=Kt.get(Ut);if(Qt!==void 0){if(K.currentProgram===Qt&&K.lightsStateVersion===Ct)return Jc(E,Bt),Qt}else Bt.uniforms=W.getUniforms(E),E.onBeforeCompile(Bt,S),Qt=W.acquireProgram(Bt,Ut),Kt.set(Ut,Qt),K.uniforms=Bt.uniforms;let qt=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qt.clippingPlanes=nt.uniform),Jc(E,Bt),K.needsLights=Ju(E),K.lightsStateVersion=Ct,K.needsLights&&(qt.ambientLightColor.value=G.state.ambient,qt.lightProbe.value=G.state.probe,qt.directionalLights.value=G.state.directional,qt.directionalLightShadows.value=G.state.directionalShadow,qt.spotLights.value=G.state.spot,qt.spotLightShadows.value=G.state.spotShadow,qt.rectAreaLights.value=G.state.rectArea,qt.ltc_1.value=G.state.rectAreaLTC1,qt.ltc_2.value=G.state.rectAreaLTC2,qt.pointLights.value=G.state.point,qt.pointLightShadows.value=G.state.pointShadow,qt.hemisphereLights.value=G.state.hemi,qt.directionalShadowMap.value=G.state.directionalShadowMap,qt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,qt.spotShadowMap.value=G.state.spotShadowMap,qt.spotLightMatrix.value=G.state.spotLightMatrix,qt.spotLightMap.value=G.state.spotLightMap,qt.pointShadowMap.value=G.state.pointShadowMap,qt.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=Qt,K.uniformsList=null,Qt}function $c(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=Us.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Jc(E,k){let J=B.get(E);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function Zu(E,k,J,K,G){k.isScene!==!0&&(k=rt),Z.resetTextureUnits();let pt=k.fog,Ct=K.isMeshStandardMaterial?k.environment:null,Bt=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Gi,Ut=(K.isMeshStandardMaterial?wt:at).get(K.envMap||Ct),Kt=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qt=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),qt=!!J.morphAttributes.position,ae=!!J.morphAttributes.normal,ve=!!J.morphAttributes.color,Ue=hi;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ue=S.toneMapping);let be=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_e=be!==void 0?be.length:0,$t=B.get(K),Re=p.state.lights;if(At===!0&&(q===!0||E!==v)){let cn=E===v&&K.id===M;nt.setState(K,E,cn)}let de=!1;K.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Re.state.version||$t.outputColorSpace!==Bt||G.isBatchedMesh&&$t.batching===!1||!G.isBatchedMesh&&$t.batching===!0||G.isBatchedMesh&&$t.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&$t.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&$t.instancing===!1||!G.isInstancedMesh&&$t.instancing===!0||G.isSkinnedMesh&&$t.skinning===!1||!G.isSkinnedMesh&&$t.skinning===!0||G.isInstancedMesh&&$t.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&$t.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&$t.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&$t.instancingMorph===!1&&G.morphTexture!==null||$t.envMap!==Ut||K.fog===!0&&$t.fog!==pt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==nt.numPlanes||$t.numIntersection!==nt.numIntersection)||$t.vertexAlphas!==Kt||$t.vertexTangents!==Qt||$t.morphTargets!==qt||$t.morphNormals!==ae||$t.morphColors!==ve||$t.toneMapping!==Ue||$t.morphTargetsCount!==_e)&&(de=!0):(de=!0,$t.__version=K.version);let yn=$t.currentProgram;de===!0&&(yn=Vr(K,k,G));let os=!1,Mn=!1,Xs=!1,Ce=yn.getUniforms(),Rn=$t.uniforms;if(vt.useProgram(yn.program)&&(os=!0,Mn=!0,Xs=!0),K.id!==M&&(M=K.id,Mn=!0),os||v!==E){vt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ce.setValue(P,"projectionMatrix",E.projectionMatrix),Ce.setValue(P,"viewMatrix",E.matrixWorldInverse);let mn=Ce.map.cameraPosition;mn!==void 0&&mn.setValue(P,ot.setFromMatrixPosition(E.matrixWorld)),xt.logarithmicDepthBuffer&&Ce.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ce.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Mn=!0,Xs=!0)}if(G.isSkinnedMesh){Ce.setOptional(P,G,"bindMatrix"),Ce.setOptional(P,G,"bindMatrixInverse");let cn=G.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ce.setValue(P,"boneTexture",cn.boneTexture,Z))}G.isBatchedMesh&&(Ce.setOptional(P,G,"batchingTexture"),Ce.setValue(P,"batchingTexture",G._matricesTexture,Z),Ce.setOptional(P,G,"batchingIdTexture"),Ce.setValue(P,"batchingIdTexture",G._indirectTexture,Z),Ce.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&Ce.setValue(P,"batchingColorTexture",G._colorsTexture,Z));let Cn=J.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&lt.update(G,J,yn),(Mn||$t.receiveShadow!==G.receiveShadow)&&($t.receiveShadow=G.receiveShadow,Ce.setValue(P,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Rn.envMap.value=Ut,Rn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(Rn.envMapIntensity.value=k.environmentIntensity),Mn&&(Ce.setValue(P,"toneMappingExposure",S.toneMappingExposure),$t.needsLights&&$u(Rn,Xs),pt&&K.fog===!0&&$.refreshFogUniforms(Rn,pt),$.refreshMaterialUniforms(Rn,K,H,X,p.state.transmissionRenderTarget[E.id]),Us.upload(P,$c($t),Rn,Z)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Us.upload(P,$c($t),Rn,Z),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ce.setValue(P,"center",G.center),Ce.setValue(P,"modelViewMatrix",G.modelViewMatrix),Ce.setValue(P,"normalMatrix",G.normalMatrix),Ce.setValue(P,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let cn=K.uniformsGroups;for(let mn=0,pl=cn.length;mn<pl;mn++){let Fi=cn[mn];Zt.update(Fi,yn),Zt.bind(Fi,yn)}}return yn}function $u(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Ju(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,k,J){let K=B.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),B.get(E.texture).__webglTexture=k,B.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:J,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let J=B.get(E);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0};let Ku=P.createFramebuffer();this.setRenderTarget=function(E,k=0,J=0){D=E,A=k,R=J;let K=!0,G=null,pt=!1,Ct=!1;if(E){let Ut=B.get(E);if(Ut.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(P.FRAMEBUFFER,null),K=!1;else if(Ut.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(Ut.__hasExternalTextures)Z.rebindTextures(E,B.get(E.texture).__webglTexture,B.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let qt=E.depthTexture;if(Ut.__boundDepthTexture!==qt){if(qt!==null&&B.has(qt)&&(E.width!==qt.image.width||E.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let Kt=E.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ct=!0);let Qt=B.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Qt[k])?G=Qt[k][J]:G=Qt[k],pt=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?G=B.get(E).__webglMultisampledFramebuffer:Array.isArray(Qt)?G=Qt[J]:G=Qt,C.copy(E.viewport),L.copy(E.scissor),O=E.scissorTest}else C.copy(dt).multiplyScalar(H).floor(),L.copy(Rt).multiplyScalar(H).floor(),O=tt;if(J!==0&&(G=Ku),vt.bindFramebuffer(P.FRAMEBUFFER,G)&&K&&vt.drawBuffers(E,G),vt.viewport(C),vt.scissor(L),vt.setScissorTest(O),pt){let Ut=B.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ut.__webglTexture,J)}else if(Ct){let Ut=k;for(let Kt=0;Kt<E.textures.length;Kt++){let Qt=B.get(E.textures[Kt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Kt,Qt.__webglTexture,J,Ut)}}else if(E!==null&&J!==0){let Ut=B.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ut.__webglTexture,J)}M=-1},this.readRenderTargetPixels=function(E,k,J,K,G,pt,Ct,Bt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){vt.bindFramebuffer(P.FRAMEBUFFER,Ut);try{let Kt=E.textures[Bt],Qt=Kt.format,qt=Kt.type;if(!xt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-K&&J>=0&&J<=E.height-G&&(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Bt),P.readPixels(k,J,K,G,Ot.convert(Qt),Ot.convert(qt),pt))}finally{let Kt=D!==null?B.get(D).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(E,k,J,K,G,pt,Ct,Bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut)if(k>=0&&k<=E.width-K&&J>=0&&J<=E.height-G){vt.bindFramebuffer(P.FRAMEBUFFER,Ut);let Kt=E.textures[Bt],Qt=Kt.format,qt=Kt.type;if(!xt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ae),P.bufferData(P.PIXEL_PACK_BUFFER,pt.byteLength,P.STREAM_READ),E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Bt),P.readPixels(k,J,K,G,Ot.convert(Qt),Ot.convert(qt),0);let ve=D!==null?B.get(D).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,ve);let Ue=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await $h(P,Ue,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ae),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,pt),P.deleteBuffer(ae),P.deleteSync(Ue),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,J=0){let K=Math.pow(2,-J),G=Math.floor(E.image.width*K),pt=Math.floor(E.image.height*K),Ct=k!==null?k.x:0,Bt=k!==null?k.y:0;Z.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,J,0,0,Ct,Bt,G,pt),vt.unbindTexture()};let Qu=P.createFramebuffer(),ju=P.createFramebuffer();this.copyTextureToTexture=function(E,k,J=null,K=null,G=0,pt=null){pt===null&&(G!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=G,G=0):pt=0);let Ct,Bt,Ut,Kt,Qt,qt,ae,ve,Ue,be=E.isCompressedTexture?E.mipmaps[pt]:E.image;if(J!==null)Ct=J.max.x-J.min.x,Bt=J.max.y-J.min.y,Ut=J.isBox3?J.max.z-J.min.z:1,Kt=J.min.x,Qt=J.min.y,qt=J.isBox3?J.min.z:0;else{let Cn=Math.pow(2,-G);Ct=Math.floor(be.width*Cn),Bt=Math.floor(be.height*Cn),E.isDataArrayTexture?Ut=be.depth:E.isData3DTexture?Ut=Math.floor(be.depth*Cn):Ut=1,Kt=0,Qt=0,qt=0}K!==null?(ae=K.x,ve=K.y,Ue=K.z):(ae=0,ve=0,Ue=0);let _e=Ot.convert(k.format),$t=Ot.convert(k.type),Re;k.isData3DTexture?(Z.setTexture3D(k,0),Re=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Z.setTexture2DArray(k,0),Re=P.TEXTURE_2D_ARRAY):(Z.setTexture2D(k,0),Re=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);let de=P.getParameter(P.UNPACK_ROW_LENGTH),yn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),os=P.getParameter(P.UNPACK_SKIP_PIXELS),Mn=P.getParameter(P.UNPACK_SKIP_ROWS),Xs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,be.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,be.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Kt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qt);let Ce=E.isDataArrayTexture||E.isData3DTexture,Rn=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let Cn=B.get(E),cn=B.get(k),mn=B.get(Cn.__renderTarget),pl=B.get(cn.__renderTarget);vt.bindFramebuffer(P.READ_FRAMEBUFFER,mn.__webglFramebuffer),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,pl.__webglFramebuffer);for(let Fi=0;Fi<Ut;Fi++)Ce&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,B.get(E).__webglTexture,G,qt+Fi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,B.get(k).__webglTexture,pt,Ue+Fi)),P.blitFramebuffer(Kt,Qt,Ct,Bt,ae,ve,Ct,Bt,P.DEPTH_BUFFER_BIT,P.NEAREST);vt.bindFramebuffer(P.READ_FRAMEBUFFER,null),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||B.has(E)){let Cn=B.get(E),cn=B.get(k);vt.bindFramebuffer(P.READ_FRAMEBUFFER,Qu),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,ju);for(let mn=0;mn<Ut;mn++)Ce?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Cn.__webglTexture,G,qt+mn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Cn.__webglTexture,G),Rn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,cn.__webglTexture,pt,Ue+mn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,cn.__webglTexture,pt),G!==0?P.blitFramebuffer(Kt,Qt,Ct,Bt,ae,ve,Ct,Bt,P.COLOR_BUFFER_BIT,P.NEAREST):Rn?P.copyTexSubImage3D(Re,pt,ae,ve,Ue+mn,Kt,Qt,Ct,Bt):P.copyTexSubImage2D(Re,pt,ae,ve,Kt,Qt,Ct,Bt);vt.bindFramebuffer(P.READ_FRAMEBUFFER,null),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Rn?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Re,pt,ae,ve,Ue,Ct,Bt,Ut,_e,$t,be.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Re,pt,ae,ve,Ue,Ct,Bt,Ut,_e,be.data):P.texSubImage3D(Re,pt,ae,ve,Ue,Ct,Bt,Ut,_e,$t,be):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,pt,ae,ve,Ct,Bt,_e,$t,be.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,pt,ae,ve,be.width,be.height,_e,be.data):P.texSubImage2D(P.TEXTURE_2D,pt,ae,ve,Ct,Bt,_e,$t,be);P.pixelStorei(P.UNPACK_ROW_LENGTH,de),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,os),P.pixelStorei(P.UNPACK_SKIP_ROWS,Mn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xs),pt===0&&k.generateMipmaps&&P.generateMipmap(Re),vt.unbindTexture()},this.initRenderTarget=function(E){B.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){A=0,R=0,D=null,vt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var $n={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Cg=new $i(-1,1,1,-1,0,1),Ac=class extends we{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}},Pg=new Ac,Jn=class{constructor(t){this._mesh=new Ft(Pg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Cg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Os=class extends dn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Xe.clone(t.uniforms),this.material=new le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Jn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ir=class extends dn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ba=class extends dn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var za=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Lt);this._width=n.width,this._height=n.height,e=new Ie(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:We}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Os($n),this.copyPass.material.blending=He,this.clock=new Ji}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ir!==void 0&&(a instanceof Ir?n=!0:a instanceof Ba&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ha=class extends dn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new gt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Tu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new gt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Bs=class i extends dn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Lt(t.x,t.y):new Lt(256,256),this.clearColor=new gt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ie(r,a,{type:We}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ie(r,a,{type:We});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Ie(r,a,{type:We});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Tu;this.highPassUniforms=Xe.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new le({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Lt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Xe.clone($n.uniforms),this.blendMaterial=new le({uniforms:this.copyUniforms,vertexShader:$n.vertexShader,fragmentShader:$n.fragmentShader,blending:gn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new gt,this._oldClearAlpha=1,this._basic=new Ne,this._fsQuad=new Jn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Lt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new le({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Lt(.5,.5)},direction:{value:new Lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new le({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Bs.BlurDirectionX=new Lt(1,0);Bs.BlurDirectionY=new Lt(0,1);var Dr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ka=class extends dn{constructor(){super(),this.uniforms=Xe.clone(Dr.uniforms),this.material=new mr({name:Dr.name,uniforms:this.uniforms,vertexShader:Dr.vertexShader,fragmentShader:Dr.fragmentShader}),this._fsQuad=new Jn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ce.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Go?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Cs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Lr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Lt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Gt},cameraProjectionMatrixInverse:{value:new Gt},cameraWorldMatrix:{value:new Gt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

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
		}`},Ur={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Va={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Au(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=Ig(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],l=2*Math.PI*o/n,c=new I(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Ti(s,t,t);return r.wrapS=Dn,r.wrapT=Dn,r.needsUpdate=!0,r}function Ig(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}var Nr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Rc(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Lt},cameraProjectionMatrixInverse:{value:new Gt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Rc(i,t,e){let n=Dg(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Dg(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new I(Math.cos(r),Math.sin(r),a))}return n}var Ga=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,x=t-f,_=e-d,m,p;x>_?(m=1,p=0):(m=0,p=1);let y=x-m+h,b=_-p+h,S=x-1+2*h,w=_-1+2*h,A=l&255,R=c&255,D=this.perm[A+this.perm[R]]%12,M=this.perm[A+m+this.perm[R+p]]%12,v=this.perm[A+1+this.perm[R+1]]%12,C=.5-x*x-_*_;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[D],x,_));let L=.5-y*y-b*b;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[M],y,b));let O=.5-S*S-w*w;return O<0?r=0:(O*=O,r=O*O*this._dot(this.grad3[v],S,w)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(n+c),d=1/6,x=(h+u+f)*d,_=h-x,m=u-x,p=f-x,y=t-_,b=e-m,S=n-p,w,A,R,D,M,v;y>=b?b>=S?(w=1,A=0,R=0,D=1,M=1,v=0):y>=S?(w=1,A=0,R=0,D=1,M=0,v=1):(w=0,A=0,R=1,D=1,M=0,v=1):b<S?(w=0,A=0,R=1,D=0,M=1,v=1):y<S?(w=0,A=1,R=0,D=0,M=1,v=1):(w=0,A=1,R=0,D=1,M=1,v=0);let C=y-w+d,L=b-A+d,O=S-R+d,V=y-D+2*d,F=b-M+2*d,N=S-v+2*d,X=y-1+3*d,H=b-1+3*d,Q=S-1+3*d,it=h&255,dt=u&255,Rt=f&255,tt=this.perm[it+this.perm[dt+this.perm[Rt]]]%12,ct=this.perm[it+w+this.perm[dt+A+this.perm[Rt+R]]]%12,At=this.perm[it+D+this.perm[dt+M+this.perm[Rt+v]]]%12,q=this.perm[it+1+this.perm[dt+1+this.perm[Rt+1]]]%12,j=.6-y*y-b*b-S*S;j<0?s=0:(j*=j,s=j*j*this._dot3(this.grad3[tt],y,b,S));let ot=.6-C*C-L*L-O*O;ot<0?r=0:(ot*=ot,r=ot*ot*this._dot3(this.grad3[ct],C,L,O));let Et=.6-V*V-F*F-N*N;Et<0?a=0:(Et*=Et,a=Et*Et*this._dot3(this.grad3[At],V,F,N));let rt=.6-X*X-H*H-Q*Q;return rt<0?o=0:(rt*=rt,o=rt*rt*this._dot3(this.grad3[q],X,H,Q)),32*(s+r+a+o)}noise4d(t,e,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,x,_=(t+e+n+s)*l,m=Math.floor(t+_),p=Math.floor(e+_),y=Math.floor(n+_),b=Math.floor(s+_),S=(m+p+y+b)*c,w=m-S,A=p-S,R=y-S,D=b-S,M=t-w,v=e-A,C=n-R,L=s-D,O=M>v?32:0,V=M>C?16:0,F=v>C?8:0,N=M>L?4:0,X=v>L?2:0,H=C>L?1:0,Q=O+V+F+N+X+H,it=a[Q][0]>=3?1:0,dt=a[Q][1]>=3?1:0,Rt=a[Q][2]>=3?1:0,tt=a[Q][3]>=3?1:0,ct=a[Q][0]>=2?1:0,At=a[Q][1]>=2?1:0,q=a[Q][2]>=2?1:0,j=a[Q][3]>=2?1:0,ot=a[Q][0]>=1?1:0,Et=a[Q][1]>=1?1:0,rt=a[Q][2]>=1?1:0,Pt=a[Q][3]>=1?1:0,Jt=M-it+c,P=v-dt+c,Xt=C-Rt+c,It=L-tt+c,xt=M-ct+2*c,vt=v-At+2*c,et=C-q+2*c,B=L-j+2*c,Z=M-ot+3*c,at=v-Et+3*c,wt=C-rt+3*c,T=L-Pt+3*c,g=M-1+4*c,U=v-1+4*c,W=C-1+4*c,$=L-1+4*c,Y=m&255,yt=p&255,nt=y&255,St=b&255,mt=o[Y+o[yt+o[nt+o[St]]]]%32,lt=o[Y+it+o[yt+dt+o[nt+Rt+o[St+tt]]]]%32,bt=o[Y+ct+o[yt+At+o[nt+q+o[St+j]]]]%32,kt=o[Y+ot+o[yt+Et+o[nt+rt+o[St+Pt]]]]%32,Ot=o[Y+1+o[yt+1+o[nt+1+o[St+1]]]]%32,Mt=.6-M*M-v*v-C*C-L*L;Mt<0?h=0:(Mt*=Mt,h=Mt*Mt*this._dot4(r[mt],M,v,C,L));let Zt=.6-Jt*Jt-P*P-Xt*Xt-It*It;Zt<0?u=0:(Zt*=Zt,u=Zt*Zt*this._dot4(r[lt],Jt,P,Xt,It));let z=.6-xt*xt-vt*vt-et*et-B*B;z<0?f=0:(z*=z,f=z*z*this._dot4(r[bt],xt,vt,et,B));let ut=.6-Z*Z-at*at-wt*wt-T*T;ut<0?d=0:(ut*=ut,d=ut*ut*this._dot4(r[kt],Z,at,wt,T));let _t=.6-g*g-U*U-W*W-$*$;return _t<0?x=0:(_t*=_t,x=_t*_t*this._dot4(r[Ot],g,U,W,$)),27*(h+u+f+d+x)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var zs=class i extends dn{constructor(t,e,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Au(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ie(this.width,this.height,{type:We}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new le({defines:Object.assign({},Lr.defines),uniforms:Xe.clone(Lr.uniforms),vertexShader:Lr.vertexShader,fragmentShader:Lr.fragmentShader,blending:He,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new gr,this.normalMaterial.blending=He,this.pdMaterial=new le({defines:Object.assign({},Nr.defines),uniforms:Xe.clone(Nr.uniforms),vertexShader:Nr.vertexShader,fragmentShader:Nr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new le({defines:Object.assign({},Ur.defines),uniforms:Xe.clone(Ur.uniforms),vertexShader:Ur.vertexShader,fragmentShader:Ur.fragmentShader,blending:He}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new le({uniforms:Xe.clone($n.uniforms),vertexShader:$n.vertexShader,fragmentShader:$n.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:br,blendDst:Ki,blendEquation:En,blendSrcAlpha:Sr,blendDstAlpha:Ki,blendEquationAlpha:En}),this.blendMaterial=new le({uniforms:Xe.clone(Va.uniforms),vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Uo,blendSrc:br,blendDst:Ki,blendEquation:En,blendSrcAlpha:Sr,blendDstAlpha:Ki,blendEquationAlpha:En}),this._fsQuad=new Jn(null),this._originalClearColor=new gt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Yi,this.depthTexture.format=Ui,this.depthTexture.type=Li,this.normalRenderTarget=new Ie(this.width,this.height,{minFilter:je,magFilter:je,type:We,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Rc(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=He,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=He,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=He,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=He,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=He,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Ga,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Ti(s,t,t,xn,Tn);return r.wrapS=Dn,r.wrapT=Dn,r.needsUpdate=!0,r}};zs.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ru={ultra:{label:"Ultra",pixelRatio:2,msaa:4,shadow:4096,shadowRange:150,ao:!0,reflections:.75,bloom:!0,grade:!0},high:{label:"High",pixelRatio:1.5,msaa:4,shadow:2048,shadowRange:120,ao:!1,reflections:.5,bloom:!0,grade:!0},medium:{label:"Balanced",pixelRatio:1.2,msaa:2,shadow:2048,shadowRange:90,ao:!1,reflections:0,bloom:!0,grade:!0},low:{label:"Performance",pixelRatio:1,msaa:0,shadow:1024,shadowRange:70,ao:!1,reflections:0,bloom:!1,grade:!1}},Cc=class extends zs{_overrideVisibility(){super._overrideVisibility(),this.scene.traverseVisible(t=>{t.userData.noAO&&(t.visible=!1,this._visibilityCache.push(t))})}},Lg={uniforms:{tDiffuse:{value:null},time:{value:0},resolution:{value:new Lt(1,1)},speedBlur:{value:0},aberration:{value:.0015},vignette:{value:.32},grain:{value:.035},sunPos:{value:new Lt(.5,.5)},sunVisible:{value:0},sunColor:{value:new gt(1,.7,.4)},flash:{value:0},night:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float time, speedBlur, aberration, vignette, grain, sunVisible, flash, night;
    uniform vec2 resolution, sunPos;
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
      // Radial speed blur toward the edges when going fast.
      if (speedBlur > 0.01) {
        vec3 acc = col;
        float w = 1.0;
        for (int i = 1; i <= 6; i++) {
          float k = float(i) / 6.0;
          vec2 suv = uv - fromCenter * k * speedBlur * 0.055 * smoothstep(0.02, 0.25, edge);
          acc += texture2D(tDiffuse, suv).rgb * (1.0 - k * 0.5);
          w += 1.0 - k * 0.5;
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
    }`},Wa=class{constructor(t){this.renderer=new Fa({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1});let e=this.renderer;e.toneMapping=Cs,e.toneMappingExposure=.85,e.shadowMap.enabled=!0,e.shadowMap.type=Lo,this.quality=null,this.scale=1,this.frameTimes=[],this.adaptTimer=0}init(t,e){this.scene=t,this.camera=e}buildComposer(){let t=this.quality,e=this.renderer;if(this.composer){this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose();for(let r of this.composer.passes)r.dispose?.()}let n=e.getSize(new Lt),s=new Ie(n.x,n.y,{type:We,samples:t.msaa});this.composer=new za(e,s),this.composer.addPass(new Ha(this.scene,this.camera)),this.ao=null,t.ao&&(this.ao=new Cc(this.scene,this.camera,n.x,n.y),this.ao.output=zs.OUTPUT.Default,this.ao.blendIntensity=.85,this.ao.updateGtaoMaterial({radius:1.6,distanceExponent:1.6,thickness:2.5,scale:1.4,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.composer.addPass(this.ao)),this.bloom=new Bs(new Lt(n.x,n.y),.42,.62,.92),this.bloom.enabled=t.bloom,this.composer.addPass(this.bloom),this.composer.addPass(new ka),this.grade=new Os(Lg),this.grade.enabled=!0,t.grade||(this.grade.uniforms.grain.value=0,this.grade.uniforms.aberration.value=0),this.composer.addPass(this.grade),this.applySize()}setQuality(t){this.quality=Ru[t]||Ru.high,this.qualityName=t,this.scale=1,this.renderer.shadowMap.enabled=!0,this.buildComposer()}applySize(){let t=innerWidth,e=innerHeight,n=Math.min(devicePixelRatio||1,this.quality.pixelRatio)*this.scale;this.renderer.setPixelRatio(n),this.renderer.setSize(t,e),this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.grade.uniforms.resolution.value.set(t*n,e*n),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.onResize?.()}adapt(t){if(this.frameTimes.push(t),this.frameTimes.length>90&&this.frameTimes.shift(),this.adaptTimer+=t,this.adaptTimer<2||this.frameTimes.length<60)return;this.adaptTimer=0;let e=[...this.frameTimes].sort((r,a)=>r-a),n=e[Math.floor(e.length/2)],s=this.scale;n>1/45?s=Math.max(.6,this.scale-.1):n<1/58&&this.scale<1&&(s=Math.min(1,this.scale+.05)),Math.abs(s-this.scale)>.001&&(this.scale=s,this.applySize())}render(){this.composer.render()}};var Hs=`
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
`,Xa=`
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
`;var Ya={golden:19.22,dusk:19.95,night:23.2,dawn:6.9,noon:13.2},Cu=6.4,Ug=19.7,ke={skySunDir:{value:new I(-.9,.12,-.3).normalize()},skyMoonDir:{value:new I(.6,.5,.4).normalize()},skyTurbidity:{value:6},skyRayleigh:{value:2.2},skyMie:{value:.006},skyMieG:{value:.82},skyIntensity:{value:.75},skyCloudCover:{value:.42},skyTime:{value:0},skyNight:{value:0},skyCloudLit:{value:new gt},skyCloudShade:{value:new gt},fogSunColor:{value:new gt},fogSunDir:{value:new I},fogHeightFalloff:{value:.012},nightFactor:{value:0},worldTime:{value:0}};jt.fog_pars_vertex=`
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogWorld;
#endif`;jt.fog_vertex=`
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogWorld = transpose(mat3(viewMatrix)) * (mvPosition.xyz - viewMatrix[3].xyz);
#endif`;jt.fog_pars_fragment=`
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
#endif`;jt.fog_fragment=`
#ifdef USE_FOG
  gl_FragColor.rgb = pa_applyFog(gl_FragColor.rgb, vFogWorld);
#endif`;function Ng(i){if(i.userData.atmo)return i;i.userData.atmo=!0;let t=i.onBeforeCompile,e=i.customProgramCacheKey();return i.onBeforeCompile=function(n,s){t.call(this,n,s),n.uniforms.fogSunColor=ke.fogSunColor,n.uniforms.fogSunDir=ke.fogSunDir,n.uniforms.fogHeightFalloff=ke.fogHeightFalloff},i.customProgramCacheKey=()=>e+"|atmo",i}function Iu(i){i.traverse(t=>{if(t.material)for(let e of Array.isArray(t.material)?t.material:[t.material])e.isShaderMaterial||e.isRawShaderMaterial||Ng(e)})}var Fg=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,Og=`
${Hs}
${Xa}
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
}`;function Pu(i=!0,t=!0){return new le({uniforms:{...ke,skyClouds:{value:i?1:0},skyDisc:{value:t?1:0}},vertexShader:Fg,fragmentShader:Og,side:tn,depthWrite:!1,depthTest:!0,fog:!1})}var Bg=new I(0,1,0),zg=new I,Hg=new I,Pc=new I,re=(i,t,e)=>new gt(i,t,e),rs=(i,t,e)=>{if(e<=t[0][0])return i.copy(t[0][1]);for(let n=1;n<t.length;n++)if(e<=t[n][0]){let[s,r]=t[n-1],[a,o]=t[n];return i.copy(r).lerp(o,(e-s)/(a-s))}return i.copy(t[t.length-1][1])},di=(i,t)=>{if(t<=i[0][0])return i[0][1];for(let e=1;e<i.length;e++)if(t<=i[e][0]){let[n,s]=i[e-1],[r,a]=i[e];return s+(a-s)*(t-n)/(r-n)}return i[i.length-1][1]},kg=[[-6,re(.9,.35,.2)],[0,re(1,.34,.1)],[4,re(1,.47,.19)],[10,re(1,.66,.38)],[25,re(1,.88,.74)],[60,re(1,.97,.92)]],Vg=[[-4,0],[0,1.6],[4,4.6],[12,5],[40,5.2]],Gg=[[-15,re(.06,.09,.18)],[-4,re(.22,.24,.42)],[2,re(.62,.55,.62)],[12,re(.6,.7,.85)],[40,re(.62,.76,.95)]],Wg=[[-15,re(.05,.05,.06)],[0,re(.35,.24,.2)],[15,re(.42,.36,.3)],[40,re(.45,.42,.38)]],Xg=[[-15,.4],[-4,.42],[3,.32],[12,.45],[30,.6]],qg=[[-15,re(.03,.04,.075)],[-5,re(.15,.15,.26)],[0,re(.42,.33,.38)],[6,re(.58,.45,.42)],[18,re(.55,.62,.72)],[50,re(.55,.66,.8)]],Yg=[[-15,re(.05,.06,.1)],[-5,re(.4,.24,.22)],[0,re(1.15,.5,.22)],[6,re(1.2,.68,.38)],[20,re(.9,.84,.76)],[50,re(.75,.8,.86)]],Zg=[[-12,re(.04,.05,.08)],[-5,re(.45,.25,.32)],[0,re(1.8,.72,.42)],[5,re(1.9,1.1,.7)],[15,re(1.5,1.4,1.35)],[50,re(1.5,1.5,1.5)]],$g=[[-12,re(.02,.025,.04)],[-5,re(.18,.13,.22)],[0,re(.42,.26,.34)],[5,re(.6,.45,.48)],[15,re(.62,.66,.74)],[50,re(.7,.74,.8)]],Jg=[[-15,7e-4],[-3,8e-4],[3,85e-5],[15,6e-4],[50,45e-5]],Kg=[[-15,1.35],[-5,1.2],[0,1.05],[6,.92],[20,.76],[50,.68]],Qg=[[-15,.5],[-4,.45],[2,.36],[12,.45],[30,.6]],qa=class{constructor(t,e){this.renderer=t,this.scene=e,this.hours=Ya.golden,this.cycle=!1,this.cycleSpeed=24/1080,this.sky=new Ft(new te(1,1,1),Pu(!0)),this.sky.scale.setScalar(2e3),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.sky.userData.noAO=!0,e.add(this.sky),this.probeScene=new Xi,this.probeSky=new Ft(new te(1,1,1),Pu(!0,!1)),this.probeSky.scale.setScalar(100),this.probeScene.add(this.probeSky);let n=new Ft(new fr(60,24),new Ne({color:1776156}));n.rotation.x=-Math.PI/2,n.position.y=-2,this.probeGround=n,this.probeScene.add(n),this.pmrem=new Ns(t),this.envTarget=null,this.envDirty=!0,this.envTimer=0,this.lastEnvHours=-100,this.sun=new yr(16777215,3),this.sun.castShadow=!0,this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.06,this.shadowRange=110,e.add(this.sun,this.sun.target),this.hemi=new vr(16777215,4473924,1),e.add(this.hemi),e.fog=new hr(12687759,.0016),this.sunDir=new I,this.moonDir=new I,this.lightDir=new I,this.nightFactor=0,this.elevation=0,this.exposure=.8,this.apply()}setHours(t){this.hours=(t%24+24)%24,this.envDirty=!0,this.apply()}setShadowQuality(t,e){this.sun.shadow.mapSize.set(t,t),this.shadowRange=e,this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null);let n=this.sun.shadow.camera;n.left=n.bottom=-e,n.right=n.top=e,n.near=1,n.far=900,n.updateProjectionMatrix()}computeSun(t,e){let n=(t-Cu)/(Ug-Cu),s=Math.PI*n,r=Math.asin(Math.sin(s)*Math.sin(nn.degToRad(64))),a=Math.cos(s),o=Math.sin(s)*.6-.32,l=Math.hypot(a,o)||1;return e.set(a/l*Math.cos(r),Math.sin(r),o/l*Math.cos(r)).normalize(),nn.radToDeg(r)}apply(){let t=ke,e=this.computeSun(this.hours,this.sunDir);this.elevation=e,this.computeSun(this.hours+12.4,this.moonDir),this.moonDir.y=Math.max(this.moonDir.y,.25),this.moonDir.normalize(),t.skySunDir.value.copy(this.sunDir),t.skyMoonDir.value.copy(this.moonDir);let n=nn.smoothstep(-e,-2,9),s=nn.smoothstep(-e,-7,1.5);this.nightFactor=n,this.lampFactor=s,t.nightFactor.value=s,t.skyNight.value=n,t.skyTurbidity.value=di([[-5,3.5],[2,5.5],[10,4.5],[40,2.6]],e),t.skyRayleigh.value=di([[-5,1.6],[2,2.8],[10,2],[40,1.2]],e),t.skyMie.value=di([[0,.006],[10,.005],[40,.004]],e),t.skyIntensity.value=di([[-8,.6],[0,.72],[20,.62],[50,.55]],e),rs(t.skyCloudLit.value,Zg,e),rs(t.skyCloudShade.value,$g,e);let r=e>-1.5;this.lightDir.copy(r?this.sunDir:this.moonDir),r?(rs(this.sun.color,kg,e),this.sun.intensity=di(Vg,e)):(this.sun.color.setRGB(.55,.65,.95),this.sun.intensity=.32*n),this.lightDir.y<.08&&(this.lightDir.y=.08,this.lightDir.normalize()),rs(this.hemi.color,Gg,e),rs(this.hemi.groundColor,Wg,e),this.hemi.intensity=di(Xg,e),rs(this.scene.fog.color,qg,e),rs(t.fogSunColor.value,Yg,e),t.fogSunDir.value.copy(this.sunDir),this.scene.fog.density=di(Jg,e),this.exposure=di(Kg,e),this.scene.environmentIntensity=di(Qg,e),this.probeGround.material.color.copy(this.hemi.groundColor).multiplyScalar(.25)}regenerateEnvironment(){let t=this.envTarget;this.envTarget=this.pmrem.fromScene(this.probeScene,0,.1,400),this.scene.environment=this.envTarget.texture,t&&t.dispose(),this.envDirty=!1,this.lastEnvHours=this.hours}update(t,e,n,s){ke.skyTime.value=e,ke.worldTime.value=e,this.cycle&&(this.hours=(this.hours+t*this.cycleSpeed)%24,this.apply(),Math.abs(this.hours-this.lastEnvHours)>.12&&(this.envDirty=!0)),this.envDirty&&this.regenerateEnvironment(),this.sky.position.copy(s.position);let a=this.shadowRange*2/this.sun.shadow.mapSize.x,o=zg.crossVectors(Bg,this.lightDir).normalize(),l=Hg.crossVectors(this.lightDir,o),c=Math.round(n.dot(o)/a)*a,h=Math.round(n.dot(l)/a)*a,u=n.dot(this.lightDir);Pc.copy(o).multiplyScalar(c).addScaledVector(l,h).addScaledVector(this.lightDir,u),this.sun.target.position.copy(Pc),this.sun.position.copy(Pc).addScaledVector(this.lightDir,450),this.sun.target.updateMatrixWorld()}get clockLabel(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};function _n(i,t,e){let n=t.isMaterial?t:new Ht(t);return n.onBeforeCompile=s=>{Object.assign(s.uniforms,e.uniforms||{}),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        ${e.vertex||""}`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPaWorld;
varying vec3 vPaNormalW;
${Hs}
${e.fragmentPars||""}`).replace("#include <color_fragment>",`#include <color_fragment>
${e.color||""}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${e.roughness||""}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${e.metalness||""}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${e.normal||""}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${e.emissive||""}`)},n.customProgramCacheKey=()=>"pa-"+i,n}function $e(i,t,e,n,{srgb:s=!0,repeat:r=!1}={}){let a=document.createElement("canvas");a.width=t,a.height=e,n(a.getContext("2d"),t,e);let o=new qi(a);return s&&(o.colorSpace=Qe),o.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),r&&(o.wrapS=o.wrapT=Dn),o}var he=[-320,-160,0,160,320],fe=[-480,-320,-160,0,160,320,480],se=13,Vn=6,Ic=[3.4,9.2],xe=.16,An=-418,Dc=-.62,Fe={from:-333,to:-342},Ve=-357,Je={minX:-412,maxX:352,minZ:-556,maxZ:556},ks=[-240,-80,80,240],Vs=[-400,-240,-80,80,240,400],Ln=160-se*2,Yt={rampStart:-342,x0:-374,x1:-556,z:-160,halfWidth:9,deckY:2.6};function pi(i,t){return Math.abs(t-Yt.z)>Yt.halfWidth||i>Yt.rampStart||i<Yt.x1?null:i>Yt.x0?xe+(Yt.deckY-xe)*(Yt.rampStart-i)/(Yt.rampStart-Yt.x0):Yt.deckY}var Kn=[[-320,40],[-320,-300],[-170,-320],[-6,-320],[150,-320],[160,-10],[10,160],[-300,160]],Za=15,pn={x:-320+Ic[0],z:246,heading:0};function kn(i,t){let e=i[0];for(let n of i)Math.abs(n-t)<Math.abs(e-t)&&(e=n);return e}function Lc(i,t){if(i<Ve)return"sand";if(i<Fe.to)return"grass";if(i<Fe.from||i>he[he.length-1]+se||Math.abs(t)>fe[fe.length-1]+se)return"curb";let e=Math.abs(i-kn(he,i))<se,n=Math.abs(t-kn(fe,t))<se;return e||n?"road":"curb"}function Du(i){return i>=Ve?0:Math.max(-.02-(Ve-i)*.0105,Dc-.3)}function Lu(i,t){return i<-330?["OCEAN DRIVE","Vista Pac\xEDfica Beach"]:i<-170?["SEAVIEW","Coastal Quarter"]:i>0&&t<-20?["DOWNTOWN","Financial District"]:t>250?["SOUTHBANK","Harbor Heights"]:["PALM DISTRICT","San Aurelio"]}function Uu(i,t){let e=Math.abs(i-kn(he,i))<se+3,n=Math.abs(t-kn(fe,t))<se+3,s={"-320":"Ocean Drive","-160":"Seaview Ave",0:"Aurelio Blvd",160:"Grand Ave",320:"Hillcrest Ave"},r={"-480":"Marina St","-320":"Sunset Blvd","-160":"Pier Ave",0:"Palm St",160:"Harbor St",320:"Rosa St",480:"Southbank Rd"};return e?s[String(kn(he,i))]:n?r[String(kn(fe,t))]:i<-330?"Beachfront":"Off road"}var jg=`
float paRoadNearest(float v, float start, float maxIndex) {
  return clamp(floor((v - start) / 160.0 + 0.5), 0.0, maxIndex) * 160.0 + start;
}
// Returns paint mask (rgb = color, a = coverage) and fills asphalt wear.
vec4 paRoadMarkings(vec2 p, out float wear, out float onRoad) {
  float dx = p.x - paRoadNearest(p.x, -320.0, 4.0);
  float dz = p.y - paRoadNearest(p.y, -480.0, 6.0);
  float adx = abs(dx), adz = abs(dz);
  bool inX = adx < ${se.toFixed(1)};
  bool inZ = adz < ${se.toFixed(1)};
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
    if (aa > ${se.toFixed(1)} || ab < ${se.toFixed(1)}) continue;
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
`;function tx(){return _n("road",{color:16777215,roughness:.85,metalness:0},{fragmentPars:jg+`
      float paPaint; float paWear; float paOnRoad;`,color:`
      {
        vec2 p = vPaWorld.xz;
        vec4 paint = paRoadMarkings(p, paWear, paOnRoad);
        float big = pa_fbm3(p * 0.035);
        float grain = pa_noise(p * 7.0) * 0.5 + pa_noise(p * 23.0) * 0.5;
        // Repaired patches: random rectangles of fresher or older asphalt.
        vec2 cell = floor(p / vec2(7.0, 11.0));
        float patchSel = pa_hash12(cell);
        vec2 cf = fract(p / vec2(7.0, 11.0));
        float patchMask = step(0.86, patchSel) * step(0.12, cf.x) * step(cf.x, 0.88) * step(0.15, cf.y) * step(cf.y, 0.8);
        vec3 asphalt = vec3(0.118, 0.115, 0.112) * (0.78 + big * 0.45) * (0.85 + grain * 0.3);
        asphalt = mix(asphalt, asphalt * (patchSel > 0.93 ? 0.72 : 1.25), patchMask);
        // Cracks from a ridged noise field.
        float crack = 1.0 - abs(pa_noise(p * 0.9) * 2.0 - 1.0);
        asphalt *= 1.0 - smoothstep(0.93, 0.99, crack) * 0.35 * smoothstep(0.4, 0.7, big);
        asphalt *= 1.0 - paWear * 0.18;
        // Off-road ground beyond the city edges.
        vec3 dirt = mix(vec3(0.17, 0.2, 0.11), vec3(0.24, 0.22, 0.15), big);
        asphalt = mix(dirt, asphalt, paOnRoad);
        float worn = smoothstep(0.25, 0.65, pa_noise(p * 1.7) * 0.6 + big * 0.6);
        paPaint = paint.a * (0.55 + 0.45 * worn) * paOnRoad;
        diffuseColor.rgb = mix(asphalt, paint.rgb, paPaint);
      }`,roughness:"roughnessFactor = mix(mix(0.9, 0.62, paWear), 0.55, paPaint);",normal:`
      {
        vec2 p = vPaWorld.xz * 9.0;
        float e = 0.35;
        float n0 = pa_noise(p), nx = pa_noise(p + vec2(e, 0.0)), nz = pa_noise(p + vec2(0.0, e));
        vec3 bump = normalize(vec3((n0 - nx) * 0.22, 1.0, (n0 - nz) * 0.22));
        float fade = 1.0 - smoothstep(12.0, 35.0, length(vPaWorld - cameraPosition));
        bump = normalize(mix(vec3(0.0, 1.0, 0.0), bump, fade * (1.0 - paPaint)));
        normal = normalize((viewMatrix * vec4(bump, 0.0)).xyz);
      }`})}function ex(){return _n("slab",{color:16777215,roughness:.85,metalness:0},{vertexPars:"attribute float aLot; flat varying float vLot; flat varying vec3 vSlabCenter; flat varying vec2 vSlabHalf;",vertex:`
      vLot = aLot;
      vSlabCenter = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
      vSlabHalf = vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[2].xyz)) * 0.5;`,fragmentPars:"flat varying float vLot; flat varying vec3 vSlabCenter; flat varying vec2 vSlabHalf; float paSlabRough;",color:`
      {
        vec2 p = vPaWorld.xz;
        vec2 l = p - vSlabCenter.xz;
        float edge = min(vSlabHalf.x - abs(l.x), vSlabHalf.y - abs(l.y));
        float big = pa_fbm3(p * 0.08);
        float fwp = max(max(fwidth(p.x), fwidth(p.y)), 1e-4); // before any branch
        vec3 col;
        paSlabRough = 0.88;
        bool top = vPaNormalW.y > 0.5;
        float ring = ${Vn.toFixed(1)};
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
      }`,roughness:"roughnessFactor = paSlabRough;"})}function nx(){return _n("sand",{color:16777215,roughness:.95},{fragmentPars:"float paWet;",color:`
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
      }`,roughness:"roughnessFactor = mix(0.95, 0.22, paWet);"})}function ix(){return _n("terrain",{color:16777215,roughness:.95},{color:`
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
      }`})}function Gn(i,t){let e=Math.max(0,i-372),n=Math.max(0,-t-560),s=Math.max(0,t-560),r=Math.hypot(e,Math.max(n,s)*.9);if(i<-360)return-40;if(r<=0)return-.6;let a=Math.sin(i*.011+Math.sin(t*.006)*2)*.5+Math.sin(t*.013+i*.004)*.5,o=Math.sin(i*.031+t*.017)*5+Math.sin(t*.043-i*.012)*3.5;return-.6+(70*(1-Math.exp(-r/170))+r*.1)*(.8+a*.3)+o*Math.min(r/120,1)+Math.min(r/30,1)*1.5}function Nu(i,t){let e=tx(),n=new Ft(new Se(1,1),e);n.rotation.x=-Math.PI/2;let s=Ve-1,r=400,a=-620,o=620;n.scale.set(r-s,o-a,1),n.position.set((s+r)/2,0,(a+o)/2),n.receiveShadow=!0,i.add(n);let l=[],c=new Set(["-80,80","240,400"]),h=new Set(["-240,-400","80,240"]),u=new Set(["80,-80","240,-240"]);for(let N of ks)for(let X of Vs){let H=`${N},${X}`,Q=c.has(H)?1:h.has(H)?2:u.has(H)?4:0;l.push([N,X,Ln,Ln,Q])}let f=o-a;l.push([(Fe.from+Fe.to)/2,0,Fe.from-Fe.to,f,3]),l.push([(Fe.to+Ve)/2,0,Fe.to-Ve,f,1]);let d=he[he.length-1]+se;l.push([d+Vn/2,0,Vn,f,0]),l.push([(d+Vn+400)/2,0,400-d-Vn,f,1]);let x=fe[0]-se,_=fe[fe.length-1]+se;for(let[N,X]of[[x,-1],[_,1]]){let H=d-Fe.from,Q=(d+Fe.from)/2;l.push([Q,N+X*Vn/2,H,Vn,0]),l.push([Q,N+X*(Vn+35),H,70,1])}let m=new te(1,1,1),p=new Wt(m,ex(),l.length),y=new Float32Array(l.length),b=new Gt;l.forEach(([N,X,H,Q,it],dt)=>{b.compose(new I(N,xe/2-.05,X),new ge,new I(H,xe+.1,Q)),p.setMatrixAt(dt,b),y[dt]=it}),m.setAttribute("aLot",new an(y,1)),p.receiveShadow=!0,i.add(p);let S=new Se(1,1,24,1),w=new Ft(S,nx());w.rotation.x=-Math.PI/2;let A=-470,R=Ve;w.scale.set(R-A,1400,1),w.position.set((A+R)/2,0,0),w.updateMatrixWorld();let D=S.attributes.position;for(let N=0;N<D.count;N++){let X=A+(D.getX(N)+.5)*(R-A);D.setZ(N,X>=Ve?0:-.02-(Ve-X)*.0105)}S.computeVertexNormals(),w.receiveShadow=!0,i.add(w);let M=new Se(2600,2600,220,220);M.rotateX(-Math.PI/2);let v=M.attributes.position;for(let N=0;N<v.count;N++){let X=v.getX(N)+500,H=v.getZ(N);v.setX(N,X),v.setY(N,Gn(X,H))}M.computeVertexNormals();let C=new Ft(M,ix());C.receiveShadow=!0,i.add(C);let L=new te(1,1,1),O=new Ht({color:10131084,roughness:.9}),V=[[Je.maxX+1.5,0,1,1,Je.maxZ-Je.minZ+4],[(Je.maxX+Fe.from)/2,Je.minZ-1.5,Je.maxX-Fe.from,1,1],[(Je.maxX+Fe.from)/2,Je.maxZ+1.5,Je.maxX-Fe.from,1,1]],F=new Wt(L,O,V.length);return V.forEach(([N,X,H,Q,it],dt)=>{b.compose(new I(N,Q/2,X),new ge,new I(H,Q,it)),F.setMatrixAt(dt,b)}),F.castShadow=F.receiveShadow=!0,i.add(F),{ground:n,slabMesh:p,terrain:C}}var Uc=8294;function Dt(){return Uc=Uc*1664525+1013904223>>>0,Uc/4294967296}var ht=(i,t)=>i+Dt()*(t-i),De=i=>i[Math.floor(Dt()*i.length)],Ae=i=>Dt()<i;var Te={CURTAIN:0,PUNCHED:1,RIBBON:2,BRICK:3,STUCCO:4,BALCONY:5,BLANK:6},sx=`
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
  float grime = pa_fbm3(vPaWorld.xz * 0.15 + vec2(0.0, y * 0.4));

  if (an.y > 0.5) {
    // Roof: membrane with a coping stone border.
    float edge = min(vFacSize.x * 0.5 - abs(vFacLocal.x), vFacSize.z * 0.5 - abs(vFacLocal.z));
    vec3 roof = vec3(0.36, 0.36, 0.35) * (0.8 + grime * 0.4) * (0.9 + pa_noise(vPaWorld.xz * 4.0) * 0.2);
    albedo = edge < 0.55 ? wall * 0.9 : roof;
    fRough = 0.9;
    return;
  }

  // Base dirt and vertical rain streaks.
  float streak = pa_noise(vec2(u * 1.3 + faceId * 31.0, y * 0.05)) * pa_noise(vec2(u * 0.4, y * 0.3 + seed));
  wall *= 1.0 - smoothstep(0.35, 0.8, streak) * 0.18;
  wall *= 0.88 + grime * 0.24;
  wall *= mix(0.72, 1.0, smoothstep(0.0, 2.5, y));

  if (style > 5.5) { albedo = wall; return; }

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
  else { u0 = 0.1; u1 = 0.9; v0 = 0.1; v1 = 0.86; }

  float win = pa_band(fu, u0, u1, wu) * pa_band(fv, v0, v1, wv) * inGrid;
  float mull = style < 2.5 && style > 1.5 ? pa_band(fu, 0.0, 0.025, wu) + pa_band(fu, 0.975, 1.0, wu) : 0.0;
  win *= 1.0 - clamp(mull, 0.0, 1.0);
  float frame = clamp(pa_band(fu, u0 - 0.035, u1 + 0.035, wu) * pa_band(fv, v0 - 0.04, v1 + 0.03, wv) * inGrid - win, 0.0, 1.0);
  // Recessed windows cast a little shadow along their top edge.
  float reveal = pa_band(fv, v1 - 0.06, v1, wv) * pa_band(fu, u0, u1, wu) * inGrid;

  float h1 = pa_hash12(vec2(colId + faceId * 97.0 + seed * 13.0, rowId + seed * 7.0));
  float h2 = pa_hash12(vec2(rowId * 1.7 + seed, colId * 3.1 + faceId));
  float h3 = pa_hash12(vec2(colId * 5.3 + seed, rowId * 2.3));
  // Office floors tend to be lit in whole runs, homes window by window.
  float floorLit = pa_hash12(vec2(rowId + seed * 5.0, faceId));
  float litP = style < 2.5 ? mix(0.05, 0.62, nightFactor) * (0.6 + floorLit * 0.8) : mix(0.04, 0.48, nightFactor);
  float lit = step(h1, litP);

  vec3 glassCol = vFacGlass * (0.32 + h2 * 0.3);
  // A few windows show curtains, blinds or a lighter interior during the day.
  glassCol = mix(glassCol, vec3(0.32, 0.29, 0.25), step(0.82, h3) * 0.6 * step(0.5, style));
  float spandrel = 0.0;
  float isCurtain = 1.0 - step(0.5, style);
  float isStucco = step(3.5, style) * (1.0 - step(4.5, style));
  vec3 frameCol = mix(mix(vec3(0.07, 0.075, 0.08), vec3(0.95, 0.93, 0.86), isStucco), vFacGlass * 0.2 + vec3(0.03), isCurtain);
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

  if (style > 3.5 && style < 4.5) {
    // Painted shutters beside stucco windows.
    float shutter = (pa_band(fu, u0 - 0.15, u0 - 0.035, wu) + pa_band(fu, u1 + 0.035, u1 + 0.15, wu)) * pa_band(fv, v0, v1, wv) * inGrid;
    vec3 shutterCol = mix(mix(vec3(0.12, 0.3, 0.26), vec3(0.15, 0.25, 0.42), step(0.33, h2)), vec3(0.45, 0.2, 0.12), step(0.66, h2));
    albedo = mix(albedo, shutterCol, shutter);
  }
  if (style > 4.5) {
    // Balcony slab and railing.
    float slab = pa_band(fv, 0.0, 0.07, wv) * inGrid;
    float rail = pa_band(fv, 0.07, 0.36, wv) * pa_band(fu, 0.05, 0.95, wu) * inGrid;
    float bars = pa_band(fract(fu * 18.0), 0.0, 0.25, wu * 18.0);
    albedo = mix(albedo, vec3(0.75, 0.74, 0.7), slab);
    albedo = mix(albedo, vec3(0.05), rail * mix(0.35, 0.9, bars));
  }

  float glassAll = clamp(win + spandrel, 0.0, 1.0);
  fGlass = glassAll;
  float glassMetal = mix(mix(0.2, 0.45, 1.0 - step(2.5, style)), 0.75, isCurtain);
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
`;function rx(){return _n("facade",{color:16777215,roughness:.85,metalness:0},{uniforms:{nightFactor:ke.nightFactor,worldTime:ke.worldTime},vertexPars:`
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
      vFacTop = (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y;`,fragmentPars:sx,color:`
      {
        vec3 albedo = diffuseColor.rgb;
        paFacade(albedo);
        diffuseColor.rgb = albedo;
      }`,roughness:"roughnessFactor = fRough;",metalness:"metalnessFactor = fMetal;",normal:"normal = normalize(normal + (viewMatrix * vec4(fTilt, 0.0)).xyz);",emissive:"totalEmissiveRadiance += fEmit;"})}function ox(){return _n("tiles",{color:16777215,roughness:.7},{color:`
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
      }`})}function ax(){let e=[-.54,0,-.54,.54,0,-.54,.54,0,.54,-.54,0,.54,-.22,1,0,.22,1,0],n=[0,4,5,0,5,1,1,5,2,2,5,4,2,4,3,3,4,0],s=new we;s.setAttribute("position",new ie(e,3)),s.setIndex(n);let r=s.toNonIndexed();return r.computeVertexNormals(),r}var mi={stucco:["#e8dcc4","#f0d6c0","#e6c9a8","#d9e2d6","#f2e8d8","#e7b9a3","#d6c7e0","#f4e4b8","#cfe0e3"],concrete:["#a9a59c","#b8b2a6","#8f8e88","#c9c3b5","#9a9690","#b0aba0"],brick:["#8a4f3c","#9c5a43","#7a4535","#a8735a","#6d4a3c"],tower:["#9fa6a8","#7c8589","#b5b8b4","#5f686d","#c8c3b8"],glass:[[.18,.32,.38],[.16,.27,.36],[.28,.3,.28],[.25,.22,.18],[.2,.34,.33],[.14,.2,.3]]};function Fu(i,t){let e=[],n=[],s=[],r=[],a=[],o=[],l=[],c=[],h=[],u=[],f=new gt;function d(tt,ct,At,q,j,ot,Et,rt={}){e.push({x:tt,z:ct,w:At,d:q,y0:j,h:ot,style:Et,...rt})}function x(tt,ct,At,q,j,ot,Et){let rt=ot===Te.STUCCO?De(mi.stucco):ot===Te.BRICK?De(mi.brick):ot===Te.CURTAIN?De(mi.tower):Ae(.35)?De(mi.stucco):De(mi.concrete),Pt=De(mi.glass),Jt=ot===Te.CURTAIN?ht(3.7,4.2):ot===Te.STUCCO?3.4:ht(3.2,3.6),P=ot===Te.CURTAIN?ht(1.6,2.2):ot===Te.RIBBON?ht(2.4,3):ot===Te.STUCCO?ht(3.8,4.6):ht(2.8,3.6),Xt=Dt()*100,It=Et!=="tower-upper"&&(Et==="shops"||Ae(.6)),xt={wall:rt,glass:Pt,floorH:Jt,cellW:P,seed:Xt,shops:It};return d(tt,ct,At,q,xe,j,ot,xt),l.push({x:tt,z:ct,w:At/2,d:q/2}),h.push({x:tt,z:ct,w:At,d:q,h:j+xe}),xt}function _(tt,ct,At,q,j,ot){for(let Et=0;Et<ot;Et++){let rt=ht(1.5,4),Pt=ht(1.5,4),Jt=ht(1,2.4);s.push([tt+ht(-At/2+3,At/2-3),j+Jt/2,ct+ht(-q/2+3,q/2-3),rt,Jt,Pt,Et%3])}}function m(tt,ct,At,q,j){let ot=ht(10,16),Et=Ae(.75)?Te.CURTAIN:De([Te.RIBBON,Te.PUNCHED]),rt=Math.min(At+ht(10,24),110),Pt=Math.min(q+ht(10,24),110);x(tt,ct,rt,Pt,ot,Ae(.5)?Te.RIBBON:Te.PUNCHED,"shops"),_(tt+rt*.3,ct+Pt*.3,rt*.3,Pt*.3,ot+xe,3);let Jt=De(mi.glass),Xt={wall:De(mi.tower),glass:Jt,floorH:ht(3.8,4.2),cellW:ht(1.6,2.1),seed:Dt()*100,shops:!1},It=j>120?3:j>70?2:1,xt=xe,vt=At,et=q;for(let B=0;B<It;B++){let Z=B===It-1?j-(xt-xe):j*ht(.45,.6)/(B+1);d(tt,ct,vt,et,xt,Z,Et,Xt),xt+=Z,B<It-1&&(vt*=ht(.72,.85),et*=ht(.72,.85))}h.push({x:tt,z:ct,w:vt,d:et,h:xt}),r.push({x:tt,z:ct,w:vt,d:et,y:xt-.6,color:De(["#bfe3ff","#ffe2b0","#ffffff","#ffb9d8"])}),Ae(.6)?(s.push([tt,xt+3,ct,vt*.45,6,et*.45,0]),a.push([tt+vt*.2,xt+6.5,ct]),j>140&&(s.push([tt,xt+6+14,ct,.6,28,.6,2]),a.push([tt,xt+34.5,ct]))):(_(tt,ct,vt,et,xt,4),a.push([tt+vt/2-1,xt+.8,ct+et/2-1]))}let p=Ln/2-Vn;for(let tt of ks)for(let ct of Vs){let At=`${tt},${ct}`,q=Math.max(0,1-Math.hypot(tt-150,ct+200)/380);if(At==="-80,80"||At==="240,400")continue;if(At==="-240,-400"||At==="80,240"){x(tt-p+14,ct-p+11,24,18,5.5,Te.STUCCO,"shops"),c.push({x:tt-p+14,z:ct-p+1.9,y:7.6,face:"north",text:At==="80,240"?"GAS \xB7 24H":"SURF DINER",color:"#ff6a5a"});continue}if(At==="80,-80"||At==="240,-240"){m(tt+ht(-8,8),ct+ht(-8,8),ht(34,42),ht(34,42),At==="240,-240"?205:ht(150,175));continue}if(tt===-240){let rt=p*2/3;for(let Pt=0;Pt<3;Pt++)for(let Jt=0;Jt<3;Jt++){if(Pt===1&&Jt===1||Ae(.1))continue;let P=tt-p+rt*(Pt+.5),Xt=ct-p+rt*(Jt+.5),It=rt-ht(3,7),xt=rt-ht(3,7),et=Math.floor(ht(2,5))*3.4+1.2,B=Ae(.75)?Te.STUCCO:Te.PUNCHED;x(P,Xt,It,xt,et,B,Pt===0||Jt===0||Pt===2||Jt===2?"shops":"home"),B===Te.STUCCO&&Ae(.8)?n.push({x:P,z:Xt,w:It,d:xt,y:et+xe,h:Math.min(It,xt)*.22}):_(P,Xt,It,xt,et+xe,2),Pt===0&&Ae(.55)&&c.push({x:P-It/2-.12,z:Xt,y:4.2+1.2,face:"west",text:De(["MOTEL","TACOS","SURF SHOP","LIQUOR","PIZZA","COCKTAILS","ICE CREAM","BAIT & TACKLE"]),color:De(["#ff4f7b","#5ff2ff","#ffd25a","#ff7a3d","#9dff6a"])})}continue}if(q>.25&&ct<100&&Ae(.85)){Ae(.45)?m(tt+ht(-6,6),ct+ht(-6,6),ht(38,48),ht(38,48),70+q*ht(70,140)):(m(tt-p/2,ct+ht(-8,8),ht(28,34),ht(32,40),50+q*ht(50,120)),m(tt+p/2,ct+ht(-8,8),ht(28,34),ht(32,40),45+q*ht(40,100)));continue}let ot=p;for(let Et=0;Et<2;Et++)for(let rt=0;rt<2;rt++){let Pt=tt-p/2+Et*ot+ht(-2,2),Jt=ct-p/2+rt*ot+ht(-2,2),P=ot-ht(4,10),Xt=ot-ht(4,10),It=ct>100,xt=Math.floor(ht(4,9)+q*ht(4,14)),vt=It?De([Te.BALCONY,Te.BALCONY,Te.PUNCHED,Te.BRICK]):De([Te.PUNCHED,Te.RIBBON,Te.BRICK,Te.CURTAIN]),et=x(Pt,Jt,P,Xt,xt*3.4+1.5,vt,"shops"),B=xt*3.4+1.5+xe;Ae(.4)&&xt>6&&d(Pt+ht(-3,3),Jt+ht(-3,3),P*.62,Xt*.62,B,ht(6,16),vt,{...et,shops:!1}),_(Pt,Jt,P,Xt,B,Math.floor(ht(2,5))),Ae(.3)&&s.push([Pt+P/4,B+3.5,Jt-Xt/4,3.4,7,3.4,3])}}for(let tt=0;tt<160;tt++){let ct=Dt(),At=ct<.6?ht(420,980):ht(-300,700),q=ct<.6?ht(-900,900):Ae(.5)?ht(620,1e3):ht(-1e3,-620);u.push([At,q])}let y=new te(1,1,1),b=new Wt(y,rx(),e.length),S=new Float32Array(e.length*4),w=new Float32Array(e.length*3),A=new Float32Array(e.length*2),R=new Gt,D=new ge,M=new I,v=new I;e.forEach((tt,ct)=>{M.set(tt.x,tt.y0+tt.h/2,tt.z),v.set(tt.w,tt.h,tt.d),R.compose(M,D,v),b.setMatrixAt(ct,R),b.setColorAt(ct,f.set(tt.wall)),S.set([tt.style,tt.floorH,tt.cellW,tt.seed],ct*4),w.set(tt.glass,ct*3),A.set([tt.shops?1:0,0],ct*2)});let C=b.geometry=y.clone();C.setAttribute("aStyle",new an(S,4)),C.setAttribute("aGlass",new an(w,3)),C.setAttribute("aExtra",new an(A,2)),b.castShadow=b.receiveShadow=!0,i.add(b);let L=n,O=new Wt(ax(),ox(),L.length);L.forEach((tt,ct)=>{M.set(tt.x,tt.y,tt.z),v.set(tt.w,tt.h,tt.d),R.compose(M,D,v),O.setMatrixAt(ct,R)}),O.castShadow=O.receiveShadow=!0,i.add(O);let V=new Ht({color:16777215,roughness:.6,metalness:.4}),F=new Wt(y,V,s.length),N=["#a7aaa8","#77797a","#55585a","#6a5040"];s.forEach(([tt,ct,At,q,j,ot,Et],rt)=>{M.set(tt,ct,At),v.set(q,j,ot),R.compose(M,D,v),F.setMatrixAt(rt,R),F.setColorAt(rt,f.set(N[Et]))}),F.castShadow=F.receiveShadow=!0,i.add(F);let X=new Ht({color:2236962,emissive:16777215,emissiveIntensity:0,roughness:.4}),H=new Wt(y,X,r.length);r.forEach((tt,ct)=>{M.set(tt.x,tt.y,tt.z),v.set(tt.w+.5,.7,tt.d+.5),R.compose(M,D,v),H.setMatrixAt(ct,R),H.setColorAt(ct,f.set(tt.color))}),i.add(H),X.onBeforeCompile=tt=>{tt.fragmentShader=tt.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},X.customProgramCacheKey=()=>"crown";let Q=new Ne({color:new gt(6,.3,.2)}),it=new Wt(new qn(.45,8,6),Q,a.length);a.forEach(([tt,ct,At],q)=>{R.makeTranslation(tt,ct,At),it.setMatrixAt(q,R)}),i.add(it);let dt=lx(i,u),Rt=[];for(let tt of c)Rt.push(cx(i,t,tt));return{colliders:l,buildingTops:h,update(tt,ct){X.emissiveIntensity=tt*1.6,Q.color.setRGB(8*(.15+.85*tt)*(Math.sin(ct*3.2)>.2?1:.04),.25,.15);for(let At of Rt){let q=At.userData.flicker&&Math.sin(ct*37)>.93?.3:1;At.material.emissiveIntensity=(.3+tt*2.2)*q}dt&&(dt.material.userData.night.value=tt)}}}function lx(i,t){let e={value:0},n=_n("hillhouse",{color:16777215,roughness:.85},{uniforms:{night:e},fragmentPars:"uniform float night; float paHouseGlow;",color:`
      {
        float h = pa_hash12(floor(vPaWorld.xz * 0.2));
        float win = step(0.5, fract(vPaWorld.y * 0.45)) * step(0.4, fract((vPaWorld.x + vPaWorld.z) * 0.35)) * step(0.3, abs(vPaNormalW.y - 1.0));
        paHouseGlow = win * step(h, 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05), win * 0.7);
      }`,emissive:"totalEmissiveRadiance += vec3(1.0, 0.7, 0.4) * paHouseGlow * night * 2.5;"}),s=t.filter(([c,h])=>Gn(c,h)>4),r=new Wt(new te(1,1,1),n,s.length),a=new Gt,o=new ge,l=new gt;return s.forEach(([c,h],u)=>{let f=ht(8,16),d=ht(8,14),x=ht(4,8);o.setFromAxisAngle(new I(0,1,0),Dt()*Math.PI),a.compose(new I(c,Gn(c,h)+x/2-1,h),o,new I(f,x,d)),r.setMatrixAt(u,a),r.setColorAt(u,l.set(De(mi.stucco)))}),n.userData.night=e,r.castShadow=!1,r.receiveShadow=!0,i.add(r),r}function cx(i,t,{x:e,y:n,z:s,face:r,text:a,color:o}){let l=$e(t,512,128,(f,d,x)=>{f.fillStyle="#0b0d10",f.fillRect(0,0,d,x),f.font='700 70px "Barlow Condensed", Impact, sans-serif',f.textAlign="center",f.textBaseline="middle",f.shadowColor=o,f.shadowBlur=18,f.fillStyle=o,f.fillText(a,d/2,x/2+3),f.shadowBlur=0,f.fillStyle="#ffffffcc",f.fillText(a,d/2,x/2+3),f.strokeStyle=o,f.lineWidth=5,f.strokeRect(8,8,d-16,x-16)}),c=new Ht({color:1118481,map:l,emissive:16777215,emissiveMap:l,emissiveIntensity:1,roughness:.5}),h=Math.min(12,3+a.length*.9),u=new Ft(new Se(h,h/4),c);return u.position.set(e,n,s),u.rotation.y=r==="west"?-Math.PI/2:r==="east"?Math.PI/2:r==="north"?Math.PI:0,u.userData.flicker=Ae(.25),i.add(u),u}var Fr=class i extends Ft{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Ge;let n=this,s=e.color!==void 0?new gt(e.color):new gt(8355711),r=e.textureWidth||512,a=e.textureHeight||512,o=e.clipBias||0,l=e.shader||i.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new In,u=new I,f=new I,d=new I,x=new Gt,_=new I(0,0,-1),m=new Me,p=new I,y=new I,b=new Me,S=new Gt,w=this.camera,A=new Ie(r,a,{samples:c,type:We}),R=new le({name:l.name!==void 0?l.name:"unspecified",uniforms:Xe.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});R.uniforms.tDiffuse.value=A.texture,R.uniforms.color.value=s,R.uniforms.textureMatrix.value=S,this.material=R,this.onBeforeRender=function(D,M,v){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(v.matrixWorld),x.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(x),p.subVectors(f,d),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(f),x.extractRotation(v.matrixWorld),_.set(0,0,-1),_.applyMatrix4(x),_.add(d),y.subVectors(f,_),y.reflect(u).negate(),y.add(f),w.position.copy(p),w.up.set(0,1,0),w.up.applyMatrix4(x),w.up.reflect(u),w.lookAt(y),w.far=v.far,w.updateMatrixWorld(),w.projectionMatrix.copy(v.projectionMatrix),S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(w.projectionMatrix),S.multiply(w.matrixWorldInverse),S.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(w.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let L=w.projectionMatrix;b.x=(Math.sign(m.x)+L.elements[8])/L.elements[0],b.y=(Math.sign(m.y)+L.elements[9])/L.elements[5],b.z=-1,b.w=(1+L.elements[10])/L.elements[14],m.multiplyScalar(2/m.dot(b)),L.elements[2]=m.x,L.elements[6]=m.y,L.elements[10]=m.z+1-o,L.elements[14]=m.w,n.visible=!1;let O=D.getRenderTarget(),V=D.xr.enabled,F=D.shadowMap.autoUpdate;D.xr.enabled=!1,D.shadowMap.autoUpdate=!1,D.setRenderTarget(A),D.state.buffers.depth.setMask(!0),D.autoClear===!1&&D.clear(),D.render(M,w),D.xr.enabled=V,D.shadowMap.autoUpdate=F,D.setRenderTarget(O);let N=v.viewport;N!==void 0&&D.state.viewport(N),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),n.material.dispose()}}};Fr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var hx=`
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
}`,ux=`
uniform sampler2D tDiffuse;
uniform float useMirror;
uniform float time;
uniform vec3 sunLight;
uniform vec3 ambient;
varying vec4 vMirror;
varying vec3 vWorld;
${Hs}
${Xa}
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
}`;function Ou(i,t){let s=new Se(2400,3400,120,170),r=new Fr(s,{textureWidth:512,textureHeight:512,clipBias:.003,multisample:0}),a=r.material.uniforms,o={...Xe.clone(Tt.fog),...ke,fogSunColor:ke.fogSunColor,fogSunDir:ke.fogSunDir,fogHeightFalloff:ke.fogHeightFalloff,tDiffuse:a.tDiffuse,textureMatrix:a.textureMatrix,useMirror:{value:1},time:{value:0},sunLight:{value:new gt},ambient:{value:new gt}};r.material.dispose(),r.material=new le({uniforms:o,vertexShader:hx,fragmentShader:ux,fog:!0,transparent:!0}),r.rotation.x=-Math.PI/2,r.position.set(An+8-2400/2,Dc,0),r.userData.noAO=!0,r.camera.layers.set(0),r.renderOrder=1,i.add(r);let l=r.onBeforeRender,c=!0,h=dx(i,t),u=px(i);return{ocean:r,pier:h,setReflections(f,d=.5){c=f,o.useMirror.value=f?1:0,r.onBeforeRender=f?l:()=>{},this.resize(d)},resize(f=.5){if(!c)return;let d=t.getDrawingBufferSize(new Lt);r.getRenderTarget().setSize(Math.max(256,Math.round(d.x*f)),Math.max(256,Math.round(d.y*f)))},update(f,d){o.time.value=f,o.sunLight.value.copy(d.sun.color).multiplyScalar(d.elevation>-1?d.sun.intensity:0),o.ambient.value.copy(d.hemi.color).multiplyScalar(d.hemi.intensity*.6),h.update(f,d.lampFactor),u.update(d.lampFactor)}}}function fx(){return _n("wood",{color:16777215,roughness:.8},{color:`
      {
        vec2 p = vPaWorld.xz;
        float plank = (abs(vPaNormalW.y) > 0.5 ? p.y : p.x) / 0.3;
        float fw = max(fwidth(plank), 0.002);
        float gap = pa_band(fract(plank), 0.0, 0.07, fw);
        float id = pa_hash12(vec2(floor(plank), 3.0));
        vec3 col = mix(vec3(0.3, 0.22, 0.15), vec3(0.42, 0.33, 0.23), id) * (0.82 + pa_noise(vec2(p.x * 3.0, plank)) * 0.25);
        diffuseColor.rgb = col * (1.0 - gap * 0.55);
      }`})}function dx(i,t){let e=new Pe,{x0:n,x1:s,z:r,halfWidth:a,deckY:o}=Yt,l=fx(),c=n-s,h=new Ft(new te(c,.6,a*2),l);h.position.set((n+s)/2,o-.3,r),h.castShadow=h.receiveShadow=!0,e.add(h);let u=Yt.rampStart-n,f=Math.atan2(o-.16,u),d=new te(Math.hypot(u,o),.6,a*2),x=new Ft(d,l);x.position.set((Yt.rampStart+n)/2,(o+.16)/2-.3,r),x.rotation.z=-f,x.castShadow=x.receiveShadow=!0,e.add(x);let _=[];for(let et=Yt.rampStart-8;et>=s;et-=9)for(let B of[-a+1,0,a-1])_.push([et,r+B]);let m=new ue(.32,.38,1,8),p=new Wt(m,new Ht({color:4930349,roughness:.9}),_.length),y=new Gt;_.forEach(([et,B],Z)=>{let wt=(pi(et,r)??o)-.5;y.compose(new I(et,(-6+wt)/2,B),new ge,new I(1,wt- -6,1)),p.setMatrixAt(Z,y)}),p.castShadow=!0,e.add(p),Yt.piles=_.filter(([et])=>et>An-4);let b=new Ht({color:15262938,roughness:.5,metalness:.3});for(let et of[-1,1])for(let B of[.55,1.05]){let Z=new Ft(new te(c,.08,.08),b);Z.position.set((n+s)/2,o+B,r+et*(a-.1)),e.add(Z)}let S=Math.floor(c/3),w=new Wt(new te(.1,1.1,.1),b,S*2);for(let et=0;et<S;et++)for(let[B,Z]of[-1,1].entries())y.makeTranslation(n-et*3,o+.55,r+Z*(a-.1)),w.setMatrixAt(et*2+B,y);e.add(w);let A=new Ht({color:15327695,roughness:.75}),R=new Ht({color:3108730,roughness:.5,metalness:.2});for(let[et,B,Z,at,wt]of[[s+14,r+4.5,18,7,6],[s+36,r-5,12,6,5]]){let T=new Ft(new te(Z,wt,at),A);T.position.set(et,o+wt/2,B),T.castShadow=T.receiveShadow=!0,e.add(T);let g=new Ft(new te(Z+1,.4,at+1),R);g.position.set(et,o+wt+.2,B),e.add(g)}let D=new Ht({color:1780275,roughness:.4,metalness:.6});for(let et of[-1,1]){let B=new Ft(new te(.6,8,.6),D);B.position.set(Yt.rampStart-2,4.1,r+et*(a+.4)),B.castShadow=!0,e.add(B)}let M=$e(t,1024,160,(et,B,Z)=>{et.fillStyle="#0d1418",et.fillRect(0,0,B,Z),et.textAlign="center",et.textBaseline="middle",et.font='800 96px "Barlow Condensed", Impact, sans-serif',et.shadowColor="#ff8a3d",et.shadowBlur=24,et.fillStyle="#ffb36b",et.fillText("VISTA PAC\xCDFICA PIER",B/2,Z/2+4),et.shadowBlur=0,et.fillStyle="#fff3e0",et.fillText("VISTA PAC\xCDFICA PIER",B/2,Z/2+4)}),v=new Ht({color:1118481,map:M,emissive:16777215,emissiveMap:M,emissiveIntensity:1}),C=new Ft(new te(.4,2.6,a*2+1.4),D);C.position.set(Yt.rampStart-2,8.6,r),e.add(C);for(let et of[-1,1]){let B=new Ft(new Se(a*2+1.2,2.4),v);B.position.set(Yt.rampStart-2+et*.21,8.6,r),B.rotation.y=et*Math.PI/2,e.add(B)}let L=new Pe,O=19,V=o+O+3.5,F=s+55,N=r+.5;L.position.set(F,V,N);let X=new Ht({color:14278112,roughness:.35,metalness:.8}),H=new Ri(O,.22,8,96);for(let et of[-1.3,1.3]){let B=new Ft(H,X);B.position.z=et,L.add(B);let Z=new Ft(new Ri(O*.55,.14,6,64),X);Z.position.z=et,L.add(Z)}let Q=24,it=new ue(.07,.07,O,4);it.translate(0,O/2,0);for(let et=0;et<Q;et++)for(let B of[-1.3,1.3]){let Z=new Ft(it,X);Z.rotation.z=et/Q*Math.PI*2,Z.position.z=B,L.add(Z)}let dt=new Ft(new ue(1.1,1.1,3.6,16),X);dt.rotation.x=Math.PI/2,L.add(dt),e.add(L);for(let et of[-3.5,3.5])for(let B of[-1,1]){let Z=Math.hypot(9,V-o),at=new Ft(new ue(.28,.4,Z,8),X);at.position.set(F+B*4.5,(V+o)/2,N+et),at.rotation.z=B*Math.atan2(9,V-o),at.castShadow=!0,e.add(at)}let Rt=16,tt=new Ht({color:16777215,roughness:.4,metalness:.3}),ct=new Wt(new te(1.8,2,1.8),tt,Rt),At=["#e2523a","#f2c14e","#3aa0c8","#f7f2e6"],q=new gt;for(let et=0;et<Rt;et++)ct.setColorAt(et,q.set(At[et%4]));ct.castShadow=!0,e.add(ct);let j=9,ot=Q*j+96,Et=new Ne({color:16777215}),rt=new Wt(new qn(.16,6,4),Et,ot),Pt=[];for(let et=0;et<Q;et++){let B=et/Q*Math.PI*2;for(let Z=1;Z<=j;Z++){let at=Z/j*O;Pt.push([-Math.sin(B)*at,Math.cos(B)*at,1.45,Z/j,et])}}for(let et=0;et<96;et++){let B=et/96*Math.PI*2;Pt.push([Math.cos(B)*O,Math.sin(B)*O,1.5,1,et])}Pt.forEach(([et,B,Z],at)=>{y.makeTranslation(et,B,Z),rt.setMatrixAt(at,y)}),L.add(rt),rt.layers.set(1);let Jt=[];for(let et=n-6;et>s+4;et-=16)for(let B of[-1,1])Jt.push([et,r+B*(a-.4)]);let P=new Wt(new ue(.06,.09,4.5,6),D,Jt.length),Xt=new Ht({color:16773846,emissive:16765066,emissiveIntensity:0}),It=new Wt(new qn(.28,10,8),Xt,Jt.length);Jt.forEach(([et,B],Z)=>{y.makeTranslation(et,o+2.25,B),P.setMatrixAt(Z,y),y.makeTranslation(et,o+4.6,B),It.setMatrixAt(Z,y)}),e.add(P,It),i.add(e);let xt=new gt,vt=new ze;return{lamps:Jt.map(([et,B])=>[et,o+4.6,B]),update(et,B){let Z=et*.06;L.rotation.z=Z;for(let wt=0;wt<Rt;wt++){let T=Z+wt/Rt*Math.PI*2;vt.position.set(F+Math.cos(T)*O,V+Math.sin(T)*O-1.4,N),vt.updateMatrix(),ct.setMatrixAt(wt,vt.matrix)}ct.instanceMatrix.needsUpdate=!0;let at=.25+B*5.5;for(let wt=0;wt<Pt.length;wt++){let[,,,T,g]=Pt[wt],U=(et*.08+T*.35+g*.013)%1,W=.55+.45*Math.sin(et*4-T*8+g*.5);xt.setHSL(U,.85,.55),xt.multiplyScalar(at*W),rt.setColorAt(wt,xt)}rt.instanceColor.needsUpdate=!0,Xt.emissiveIntensity=B*3,v.emissiveIntensity=.3+B*1.8}}}function px(i){let t=new Pe,e=new Gt,n=new Ht({color:6269385,roughness:.6}),s=new Ht({color:15854296,roughness:.6}),r=new Ht({color:14175290,roughness:.6});for(let d=-520;d<=520;d+=130){if(Math.abs(d-Yt.z)<40)continue;let x=new Pe,_=new Ft(new te(3.2,2.4,3.2),n);_.position.y=3.2;let m=new Ft(new Ai(2.7,1.1,4),r);m.position.y=4.95,m.rotation.y=Math.PI/4;let p=new Ft(new te(4.4,.18,4.4),s);p.position.y=1.95;let y=new Ft(new te(.1,.9,2.4),new Ht({color:1911347,roughness:.1,metalness:.6}));y.position.set(-1.62,3.5,0),x.add(_,m,p,y);for(let w of[-1.8,1.8])for(let A of[-1.8,1.8]){let R=new Ft(new te(.18,2.4,.18),s);R.position.set(w,.8,A),x.add(R)}let b=new Ft(new te(4.5,.12,1.4),s);b.position.set(3.6,1,0),b.rotation.z=-.42,x.add(b);let S=-388;x.position.set(S,-.02-(Ve-S)*.0105,d),x.traverse(w=>{w.isMesh&&(w.castShadow=!0,w.receiveShadow=!0)}),t.add(x)}let a=["#e8553a","#f0c24b","#3b8fc2","#f3efe4","#45a37f"],o=40,l=new Wt(new Ai(1.4,.55,12,1,!0),new Ht({color:16777215,roughness:.8,side:en}),o),c=new Wt(new ue(.03,.03,2.3,4),s,o),h=new Wt(new te(.9,.02,1.9),new Ht({color:16777215,roughness:.9}),o),u=new gt,f=new ge;for(let d=0;d<o;d++){let x=ht(-520,520);Math.abs(x-Yt.z)<14&&(x+=30);let _=ht(-398,-366),m=-.02-(Ve-_)*.0105;f.setFromEuler(new fn(ht(-.12,.12),0,ht(-.12,.12))),e.compose(new I(_,m+2.3,x),f,new I(1,1,1)),l.setMatrixAt(d,e),e.compose(new I(_,m+1.15,x),f,new I(1,1,1)),c.setMatrixAt(d,e),l.setColorAt(d,u.set(De(a))),f.setFromAxisAngle(new I(0,1,0),ht(0,Math.PI)),e.compose(new I(_+ht(-1.5,1.5),m+.02,x+ht(-1.5,1.5)),f,new I(1,1,1)),h.setMatrixAt(d,e),h.setColorAt(d,u.set(De(a)))}l.castShadow=c.castShadow=!0,h.receiveShadow=!0,t.add(l,c,h);for(let d of[l,c,h])d.layers.set(1);return i.add(t),{update(){}}}function Gs(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new we,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Bu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][f]);let x=Bu(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Bu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new on(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<e;x++){let _=h.getComponent(f,x);o.setComponent(f+u,x,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Nc={value:new gt};function mx(i){return $e(i,256,1024,(t,e,n)=>{t.clearRect(0,0,e,n);for(let s=0;s<150;s++){let r=s/150,a=n*(.04+r*.94),o=e*.47*Math.sin(Math.PI*Math.pow(r,.75))*(.85+Dt()*.3),l=70+Dt()*50,c=40+Dt()*30,h=25+Dt()*20;t.strokeStyle=`rgb(${c},${l},${h})`,t.lineWidth=3.2+Dt()*2.2;for(let u of[-1,1])t.beginPath(),t.moveTo(e/2,a),t.quadraticCurveTo(e/2+u*o*.5,a-o*.25,e/2+u*o,a-o*.55+Dt()*8),t.stroke()}t.strokeStyle="#5b5a34",t.lineWidth=6,t.beginPath(),t.moveTo(e/2,n*.02),t.lineTo(e/2,n),t.stroke()})}function gx(i){return $e(i,256,256,(t,e,n)=>{t.clearRect(0,0,e,n);for(let s=0;s<420;s++){let r=Dt()*Math.PI*2,a=Math.sqrt(Dt())*e*.45,o=e/2+Math.cos(r)*a,l=n/2+Math.sin(r)*a,c=75+Dt()*60;t.fillStyle=`rgb(${30+Dt()*30},${c},${20+Dt()*25})`,t.save(),t.translate(o,l),t.rotate(Dt()*Math.PI),t.beginPath(),t.ellipse(0,0,7+Dt()*5,3+Dt()*2,0,0,Math.PI*2),t.fill(),t.restore()}})}function xx(i,t,e,n,s){let a=[],o=[],l=[],c=new I(Math.cos(i),0,Math.sin(i)),h=new I(-c.z,0,c.x),u=new I;for(let d=0;d<=7;d++){let x=d/7,_=t-s*x*x;d>0&&(u=u.clone().addScaledVector(c,Math.cos(_)*e/7).add(new I(0,Math.sin(_)*e/7,0)));let m=n*Math.sin(Math.PI*Math.min(1,.15+x*.95))*.5+.05,p=.18*m;for(let[y,b]of[[-1,0],[0,.5],[1,1]]){let S=u.clone().addScaledVector(h,y*m);S.y+=y===0?p:-p*.2,a.push(S.x,S.y,S.z),o.push(b,1-x)}if(d>0){let y=(d-1)*3,b=d*3;l.push(y,b,y+1,y+1,b,b+1,y+1,b+1,y+2,y+2,b+1,b+2)}}let f=new we;return f.setAttribute("position",new ie(a,3)),f.setAttribute("uv",new ie(o,2)),f.setIndex(l),f.computeVertexNormals(),f}function vx(i,t,e){let n=[];for(let s=0;s<i;s++){let r=s%3,a=s/i*Math.PI*2+Dt()*.3,o=[.95,.45,.05][r]+Dt()*.2,l=[1.3,1.6,1.4][r];n.push(xx(a,o,t*(r===0?.8:1)*ht(.88,1.1),e,l))}return Gs(n)}function _x(i){let t=new ue(.62,1,1,9,12,!0);t.translate(0,.5,0);let e=t.attributes.position;for(let n=0;n<e.count;n++){let s=e.getY(n);e.setX(n,e.getX(n)+i*s*s)}return t.computeVertexNormals(),t}function zu(i,t){let e=_n(t,{map:i,alphaTest:.42,side:en,roughness:.72,metalness:0},{uniforms:{worldTime:ke.worldTime,leafSun:Nc,skySunDir:ke.skySunDir},vertexPars:"uniform float worldTime;",vertex:"",fragmentPars:"uniform vec3 leafSun; uniform vec3 skySunDir;",color:"diffuseColor.rgb *= 0.8 + 0.4 * pa_noise(vPaWorld.xz * 0.7 + vPaWorld.y);",emissive:`
      {
        // Sunlight shining through the leaves when they are backlit.
        vec3 vdir = normalize(vPaWorld - cameraPosition);
        float back = pow(max(dot(vdir, skySunDir), 0.0), 3.0);
        totalEmissiveRadiance += diffuseColor.rgb * leafSun * (back * 0.55 + 0.04);
      }`}),n=e.onBeforeCompile;return e.onBeforeCompile=(s,r)=>{n(s,r),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      {
        float ph = 0.0;
        #ifdef USE_INSTANCING
          ph = instanceMatrix[3].x * 0.31 + instanceMatrix[3].z * 0.17;
        #endif
        float reach = length(position.xz);
        float sway = sin(worldTime * 1.4 + ph + reach * 0.4) * 0.5 + sin(worldTime * 2.3 + ph * 1.7) * 0.25;
        transformed.y += sway * 0.05 * reach;
        transformed.xz += normalize(position.xz + 1e-4) * sway * 0.035 * reach;
      }`)},e}function yx(){return _n("palmtrunk",{color:16777215,roughness:.9},{color:`
      {
        float rings = pa_band(fract(vPaWorld.y * 3.2 + pa_noise(vPaWorld.xz * 3.0) * 0.4), 0.0, 0.18, fwidth(vPaWorld.y * 3.2));
        vec3 bark = mix(vec3(0.33, 0.29, 0.24), vec3(0.45, 0.4, 0.33), pa_noise(vec2(atan(vPaNormalW.z, vPaNormalW.x) * 4.0, vPaWorld.y * 0.8)));
        diffuseColor.rgb = bark * (1.0 - rings * 0.3);
      }`})}function Hu(i,t){let e=[],n=mx(t),s=gx(t),r=zu(n,"frond"),a=zu(s,"canopy"),o=yx(),l=new Ht({color:6048309,roughness:1}),c=[],h=[],u=[];for(let v=-545;v<=545;v+=18)Math.abs(v-Yt.z)<14||(c.push([(Fe.to+Ve)/2+ht(-1.5,1.5),v+ht(-2,2)]),Ae(.3)&&h.push([Ve-ht(6,14),v+ht(-4,4)]));for(let v of[-320,0])for(let C=-300;C<330;C+=28)if(!he.some(L=>Math.abs(C-L)<se+6))for(let L of[-1,1])c.push([C+ht(-1,1),v+L*(se+1.6)]);for(let v=-470;v<480;v+=32)fe.some(C=>Math.abs(v-C)<se+6)||c.push([-320+se+1.6,v+ht(-1,1)]);for(let[v,C]of[[-80,80],[240,400]]){let L=Ln/2-10;for(let O=0;O<26;O++){let V=v+ht(-L,L),F=C+ht(-L,L);Math.abs(V-v)<9&&Math.abs(F-C)<9||(Ae(.4)?h.push([V,F]):u.push([V,F,ht(.8,1.3),0]))}}for(let v of[0,160,320])for(let C=110;C<470;C+=24)if(!fe.some(L=>Math.abs(C-L)<se+6))for(let L of[-1,1])v===320&&L>0||u.push([v+L*(se+1.8),C,ht(.6,.85),0]);for(let v=0;v<520;v++){let C=Dt(),L=C<.56?ht(380,1100):ht(-300,700),O=C<.56?ht(-1100,1100):C<.78?ht(-1e3,-575):ht(575,1e3),V=Gn(L,O);V<2||u.push([L,O,ht(.7,1.6),V])}let f=new Gt,d=new ge,x=new I,_=new I,m=new I(0,1,0);function p(v,{heightRange:C,thickness:L,bend:O,crown:V,skirt:F}){let N=_x(O),X=vx(V.count,V.length,V.width),H=new Wt(N,o,v.length),Q=new Wt(X,r,v.length),it=F?new Wt(new ue(.9,.55,1,8),l,v.length):null;v.forEach(([dt,Rt],tt)=>{let ct=ht(...C);d.setFromAxisAngle(m,Dt()*Math.PI*2),_.set(L,ct,L),x.set(dt,-.1,Rt),f.compose(x,d,_),H.setMatrixAt(tt,f);let At=new I(O,1,0).applyMatrix4(f),q=ht(.85,1.15);d.setFromAxisAngle(m,Dt()*Math.PI*2),f.compose(At,d,_.set(q,q,q)),Q.setMatrixAt(tt,f),it&&(f.compose(At.clone().add(new I(0,-1.6,0)),d,_.set(1,2.6,1)),it.setMatrixAt(tt,f)),e.push({x:dt,z:Rt,r:.45})}),H.castShadow=Q.castShadow=!0,H.receiveShadow=Q.receiveShadow=!0,i.add(H,Q),it&&(it.castShadow=!0,i.add(it))}p(c,{heightRange:[17,26],thickness:.36,bend:4,crown:{count:15,length:4.2,width:1.5},skirt:!0}),p(h,{heightRange:[6,10],thickness:.75,bend:.8,crown:{count:24,length:6.2,width:2.2},skirt:!1});let y=[];for(let v=0;v<46;v++){let C=new Se(2.6,2.6),L=new I(Dt()-.5,(Dt()-.3)*.8,Dt()-.5).normalize(),O=Math.cbrt(Dt())*2.6;C.lookAt(L),C.rotateZ(Dt()*6.28),C.translate(L.x*O*1.2,5.6+L.y*O*.85,L.z*O*1.2),y.push(C)}let b=Gs(y),S=b.attributes.normal,w=b.attributes.position;for(let v=0;v<S.count;v++)x.set(w.getX(v),w.getY(v)-5.2,w.getZ(v)).normalize(),S.setXYZ(v,x.x,x.y,x.z);let A=new ue(.18,.32,5,7);A.translate(0,2.5,0);let R=new Wt(b,a,u.length),D=new Wt(A,new Ht({color:4865328,roughness:.95}),u.length),M=new gt;return u.forEach(([v,C,L,O],V)=>{d.setFromAxisAngle(m,Dt()*Math.PI*2),f.compose(x.set(v,O-.1,C),d,_.set(L,L*ht(.85,1.2),L)),R.setMatrixAt(V,f),D.setMatrixAt(V,f),R.setColorAt(V,M.setHSL(ht(.2,.3),ht(.35,.6),ht(.45,.62))),O===0&&e.push({x:v,z:C,r:.5})}),R.castShadow=D.castShadow=!0,R.receiveShadow=!0,i.add(R,D),{trunkColliders:e}}var $a=28;function Ja(i,t){let e=(t%$a+$a)%$a,n=i===0?e:(e+14)%$a;return n<10?2:n<13?1:0}function Mx(i){return $e(i,128,128,(t,e,n)=>{let s=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.35,"rgba(255,255,255,0.55)"),s.addColorStop(.7,"rgba(255,255,255,0.15)"),s.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=s,t.fillRect(0,0,e,n)})}var Sx=`
varying float vH;
varying vec3 vN;
varying vec3 vW;
void main() {
  vH = uv.y;
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,bx=`
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
}`;function Or(i,t=0){return new le({uniforms:{color:{value:new gt(i)},intensity:{value:t}},vertexShader:Sx,fragmentShader:bx,transparent:!0,depthWrite:!1,blending:gn,side:en})}function ku(i,t,e=[]){let n=new Gt,s=new ge,r=new I,a=new I(1,1,1),o=new I(0,1,0),l=new Ht({color:4146760,roughness:.45,metalness:.7}),c=[],h=se+7;for(let B of he)for(let Z=-520;Z<=520;Z+=38)if(!fe.some(at=>Math.abs(Z-at)<h))for(let at of[-1,1])B===he[0]&&at<0||c.push([B+at*(se+.9),Z+(at>0?19:0),-at,0]);for(let B of fe)for(let Z=-300;Z<=320;Z+=38)if(!he.some(at=>Math.abs(Z-at)<h))for(let at of[-1,1])c.push([Z+(at>0?19:0),B+at*(se+.9),0,-at]);let u=[];for(let B=-540;B<=540;B+=24)Math.abs(B-Yt.z)>12&&u.push([(Fe.from+Fe.to)/2,B]);let f=new ue(.09,.14,9,8);f.translate(0,4.5,0);let d=new te(.1,.1,2.6);d.translate(0,0,1.3);let x=new te(.42,.16,.9),_=new Wt(f,l,c.length),m=new Wt(d,l,c.length),p=new Ht({color:7829367,emissive:16766624,emissiveIntensity:0,roughness:.3}),y=new Wt(x,p,c.length),b=[];c.forEach(([B,Z,at,wt],T)=>{let g=Math.atan2(at,wt);s.setFromAxisAngle(o,g),n.compose(r.set(B,xe,Z),s,a),_.setMatrixAt(T,n),n.compose(r.set(B,xe+8.85,Z),s,a),m.setMatrixAt(T,n),n.compose(r.set(B+at*2.5,xe+8.78,Z+wt*2.5),s,a),y.setMatrixAt(T,n),b.push([B+at*2.6,Z+wt*2.6,13,1])}),_.castShadow=m.castShadow=!0;for(let B of[_,m,y])i.add(B);let S=new Wt(new ue(.07,.1,4.2,8),l,u.length),w=new Ht({color:16774888,emissive:16764810,emissiveIntensity:0,roughness:.2}),A=new Wt(new qn(.3,12,8),w,u.length);u.forEach(([B,Z],at)=>{n.makeTranslation(B,xe+2.1,Z),S.setMatrixAt(at,n),n.makeTranslation(B,xe+4.4,Z),A.setMatrixAt(at,n),b.push([B,Z,8,.8])});for(let[B,Z,at]of e)b.push([B,at,7,.7,Z-4.6]);i.add(S,A);let R=new Ne({map:Mx(t),color:16757866,transparent:!0,depthWrite:!1,blending:gn,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2,fog:!0}),D=new Se(1,1);D.rotateX(-Math.PI/2);let M=new Wt(D,R,b.length);b.forEach(([B,Z,at,wt,T=0],g)=>{n.compose(r.set(B,T+.04+(wt<1?xe:0),Z),s.identity(),a.set(at,1,at)),M.setMatrixAt(g,n)}),M.renderOrder=2,M.userData.noAO=!0,M.layers.set(1),a.set(1,1,1),i.add(M);let v=new ue(.25,3.6,8.6,18,1,!0);v.translate(0,-4.3,0);let C=Or(16757866),L=new Wt(v,C,c.length);c.forEach(([B,Z,at,wt],T)=>{n.makeTranslation(B+at*2.5,xe+8.7,Z+wt*2.5),L.setMatrixAt(T,n)}),L.userData.noAO=!0,L.layers.set(1),L.renderOrder=3,i.add(L);let O=[],V=[];for(let B of he)for(let Z of fe){let at=[[B+6,Z-16,0,1,0],[B-6,Z+16,0,-1,0],[B+16,Z+6,-1,0,1],[B-16,Z-6,1,0,1]];for(let[wt,T,g,U,W]of at){if(W===0&&(U>0&&Z===fe[fe.length-1]||U<0&&Z===fe[0])||W===1&&(g<0&&B===he[0]||g>0&&B===he[he.length-1]))continue;O.push([wt,T,g,U,W]);let $=W===0?B+14.2*Math.sign(wt-B):wt,Y=W===0?T:Z+14.2*Math.sign(T-Z);V.push([$,Y,wt,T])}}let F=new ue(.16,.2,7,8);F.translate(0,3.5,0);let N=new Wt(F,l,V.length),X=new Wt(new te(1,.16,.16),l,V.length);V.forEach(([B,Z,at,wt],T)=>{n.makeTranslation(B,xe,Z),N.setMatrixAt(T,n);let g=Math.hypot(at-B,wt-Z)+1;s.setFromAxisAngle(o,Math.atan2(-(wt-Z),at-B)),n.compose(r.set((B+at)/2,6.8,(Z+wt)/2),s,a.set(g,1,1)),X.setMatrixAt(T,n),a.set(1,1,1)}),N.castShadow=X.castShadow=!0,i.add(N,X);let H=new Ht({color:1909284,roughness:.5,metalness:.4}),Q=new Wt(new te(.5,1.4,.36),H,O.length),it=new ue(.14,.14,.06,12);it.rotateX(Math.PI/2);let dt=new Wt(it,new Ne({color:16777215}),O.length*3),Rt=[];O.forEach(([B,Z,at,wt,T],g)=>{s.setFromAxisAngle(o,Math.atan2(at,wt)),n.compose(r.set(B,6.1,Z),s,a),Q.setMatrixAt(g,n);for(let U=0;U<3;U++)n.compose(r.set(B+at*.2,6.55-U*.43,Z+wt*.2),s,a),dt.setMatrixAt(g*3+U,n),Rt.push([T,U])}),i.add(Q,dt);let tt=[new gt(7,.35,.2),new gt(7,3.6,.3),new gt(.3,6,2.2)],ct=new gt(.05,.05,.05),At=[],q=[],j=[];for(let B of he)for(let Z=-500;Z<=500;Z+=50){if(fe.some(wt=>Math.abs(Z-wt)<h))continue;let at=Ae(.5)?1:-1;B===he[0]&&at<0||(Ae(.5)&&At.push([B+at*(se+.6),Z+6]),Ae(.35)&&q.push([B+at*(se+3.2),Z+12,at]),Ae(.4)&&j.push([B+at*(se+.9),Z+15]))}let ot=new Wt(new ue(.16,.2,.8,8),new Ht({color:12072234,roughness:.5}),At.length);At.forEach(([B,Z],at)=>{n.makeTranslation(B,xe+.4,Z),ot.setMatrixAt(at,n)});let Et=new Wt(new te(.6,.5,2.2),new Ht({color:5916210,roughness:.8}),q.length);q.forEach(([B,Z],at)=>{n.makeTranslation(B,xe+.25,Z),Et.setMatrixAt(at,n)});let rt=new Wt(new ue(.3,.28,1,10),new Ht({color:2968122,roughness:.6,metalness:.3}),j.length);j.forEach(([B,Z],at)=>{n.makeTranslation(B,xe+.5,Z),rt.setMatrixAt(at,n)});for(let B of[ot,Et,rt])B.castShadow=!0,B.layers.set(1),i.add(B);let Pt=[["SURF FIZZ","TASTE THE SWELL","#ff6b4a","#14303d"],["HORIZON AIR","FLY THE COAST","#ffd36b","#1a2a52"],["VISTA BANK","YOUR MONEY. YOUR VIEW.","#9fe3d3","#10302c"],["NEON NIGHTS","THE PIER \xB7 FRIDAYS","#ff63c3","#1d0f2e"],["CALDERA GT","BUILT FOR THE COAST ROAD","#ff7a3d","#141a20"],["SOLSTICE","SUNSCREEN \xB7 SPF 50","#ffe2a8","#c2542e"]],Jt=[[-215,-432,-Math.PI/2],[100,212,Math.PI],[-136,30,-Math.PI/2],[270,362,Math.PI],[345,-200,-Math.PI/2],[345,250,-Math.PI/2]],P=[];Jt.forEach(([B,Z,at],wt)=>{let[T,g,U,W]=Pt[wt%Pt.length],$=$e(t,1024,384,(mt,lt,bt)=>{let kt=mt.createLinearGradient(0,0,lt,bt);kt.addColorStop(0,W),kt.addColorStop(1,"#000000"),mt.fillStyle=kt,mt.fillRect(0,0,lt,bt),mt.fillStyle=U,mt.beginPath(),mt.arc(lt*.82,bt*.5,bt*.36,0,Math.PI*2),mt.fill(),mt.fillStyle="#fff6e6",mt.font='800 120px "Barlow Condensed", Impact, sans-serif',mt.fillText(T,48,170),mt.fillStyle=U,mt.font='600 46px "Barlow", Arial, sans-serif',mt.fillText(g,52,250),mt.fillStyle="#ffffff40",mt.fillRect(52,290,300,6)}),Y=new Pe,yt=new Ft(new Se(14,5.25),new Ht({map:$,emissive:16777215,emissiveMap:$,emissiveIntensity:0,roughness:.55}));yt.position.y=14;let nt=new Ft(new te(14.4,5.6,.3),l);nt.position.set(0,14,-.2);let St=new Ft(new ue(.35,.45,11.5,10),l);St.position.y=5.75,Y.add(yt,nt,St),Y.position.set(B,xe,Z),Y.rotation.y=at,Y.traverse(mt=>{mt.isMesh&&(mt.castShadow=!0)}),i.add(Y),P.push(yt.material)});let Xt="VISTA PAC\xCDFICA",It=new Ht({color:16052714,roughness:.7,side:en,alphaTest:.5}),xt=new Map,vt=new Pe,et=-270;for(let B of Xt){if(B===" "){et+=22;continue}xt.has(B)||xt.set(B,$e(t,128,160,(T,g,U)=>{T.clearRect(0,0,g,U),T.fillStyle="#fff",T.font='800 168px "Barlow Condensed", Impact, sans-serif',T.textAlign="center",T.textBaseline="alphabetic",T.fillText(B,g/2,U-8)}));let Z=It.clone();Z.map=xt.get(B);let at=new Ft(new Se(15,19),Z),wt=600;at.position.set(wt,Math.min(Gn(wt,et-6),Gn(wt,et+6))+8.5,et),at.rotation.y=-Math.PI/2,at.castShadow=!0,vt.add(at),et+=17}return i.add(vt),{lamps:c,update(B,Z){p.emissiveIntensity=Z*4,w.emissiveIntensity=Z*2.6,R.opacity=Z*.7,C.uniforms.intensity.value=Z*.09;for(let wt of P)wt.emissiveIntensity=.05+Z*1.1;let at=[Ja(0,B),Ja(1,B)];for(let wt=0;wt<Rt.length;wt++){let[T,g]=Rt[wt],U=g===0&&at[T]===0||g===1&&at[T]===1||g===2&&at[T]===2;dt.setColorAt(wt,U?tt[g]:ct)}dt.instanceColor.needsUpdate=!0}}}var Le=(i,t)=>{if(t<=i[0][0])return i[0][1];for(let e=1;e<i.length;e++)if(t<=i[e][0]){let[n,s]=i[e-1],[r,a]=i[e],o=(t-n)/(r-n);return o=o*o*(3-2*o),s+(a-s)*o}return i[i.length-1][1]},Ex={coupe:{length:4.62,wheelR:.355,wheelW:.27,track:.83,wheels:[.185,.79],body:{top:[[0,.6],[.05,.7],[.18,.8],[.33,.9],[.78,.96],[.92,.95],[1,.82]],bottom:[[0,.33],[.06,.25],[.94,.26],[1,.38]],width:[[0,.76],[.07,.93],[.3,.97],[.74,1],[.93,.96],[1,.84]],exp:3.4,taper:.1},cabin:{from:.31,to:.9,top:[[0,.88],[.3,1.27],[.52,1.29],[.72,1.14],[1,.93]],width:[[0,.8],[.35,.79],[.75,.76],[1,.66]],taper:.3,exp:2.6,roof:[.33,.64]},spoiler:!0},sedan:{length:4.85,wheelR:.34,wheelW:.24,track:.81,wheels:[.2,.77],body:{top:[[0,.66],[.06,.76],[.25,.86],[.32,.92],[.8,.98],[.94,.96],[1,.86]],bottom:[[0,.36],[.07,.3],[.93,.3],[1,.4]],width:[[0,.78],[.07,.92],[.5,.95],[.93,.93],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.82,top:[[0,.92],[.27,1.43],[.68,1.43],[.88,1.2],[1,.97]],width:[[0,.8],[.4,.82],[1,.76]],taper:.24,exp:2.8,roof:[.28,.72]}},suv:{length:4.75,wheelR:.39,wheelW:.27,track:.85,wheels:[.18,.79],body:{top:[[0,.82],[.06,.97],[.26,1.06],[.33,1.08],[.95,1.1],[1,1.02]],bottom:[[0,.44],[.07,.36],[.93,.37],[1,.46]],width:[[0,.82],[.07,.95],[.5,.98],[.95,.96],[1,.9]],exp:4.5,taper:.06},cabin:{from:.28,to:.98,top:[[0,1.05],[.2,1.72],[.85,1.74],[.97,1.62],[1,1.1]],width:[[0,.86],[.5,.88],[1,.84]],taper:.15,exp:4,roof:[.2,.96]},rails:!0},hatch:{length:4.05,wheelR:.32,wheelW:.22,track:.78,wheels:[.19,.8],body:{top:[[0,.66],[.07,.78],[.28,.88],[.34,.92],[.95,.98],[1,.9]],bottom:[[0,.36],[.08,.3],[.94,.31],[1,.42]],width:[[0,.76],[.08,.89],[.5,.92],[.94,.9],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.97,top:[[0,.92],[.3,1.46],[.82,1.45],[.96,1.32],[1,.98]],width:[[0,.79],[.5,.8],[1,.76]],taper:.2,exp:3.2,roof:[.3,.92]}},pickup:{length:5.4,wheelR:.41,wheelW:.28,track:.88,wheels:[.17,.75],body:{top:[[0,.92],[.05,1.06],[.24,1.14],[.3,1.16],[1,1.16]],bottom:[[0,.5],[.06,.42],[.95,.44],[1,.52]],width:[[0,.86],[.06,.98],[.95,1],[1,.98]],exp:5,taper:.04},cabin:{from:.29,to:.58,top:[[0,1.12],[.3,1.86],[.92,1.88],[1,1.16]],width:[[0,.9],[1,.9]],taper:.12,exp:4.5,roof:[.28,.94]},bed:!0}};function Fc(i,t,e,n,s,r,a,o,l=null){let c=(t+e)/2,h=(e-t)/2,u=2/n;for(let f=0;f<r;f++){let d=l?l[0]+(l[1]-l[0])*(f/(r-1)):f/r*Math.PI*2,x=Math.cos(d),_=Math.sin(d),m=i*Math.sign(x)*Math.pow(Math.abs(x),u),p=c+h*Math.sign(_)*Math.pow(Math.abs(_),u);m*=1-s*Math.max(0,_),a.push(m,p,o)}}function Oc(i,t,{closed:e=!0,caps:n=!0}={}){let s=[],r=[];for(let h of i)s.push(...h);let a=i.length,o=t,l=e?o:o-1;for(let h=0;h<a-1;h++)for(let u=0;u<l;u++){let f=(u+1)%o,d=h*o+u,x=h*o+f,_=(h+1)*o+u,m=(h+1)*o+f;r.push(d,x,_,x,m,_)}if(n&&e)for(let[h,u]of[[0,!0],[a-1,!1]]){let f=s.length/3,d=0,x=0,_=0;for(let p=0;p<o;p++){let y=(h*o+p)*3;d+=s[y],x+=s[y+1],_+=s[y+2]}for(let p=0;p<o;p++){let y=(h*o+p)*3;s.push(s[y],s[y+1],s[y+2])}s.push(d/o,x/o,_/o);let m=f+o;for(let p=0;p<o;p++){let y=(p+1)%o;u?r.push(m,f+y,f+p):r.push(m,f+p,f+y)}}let c=new we;return c.setAttribute("position",new ie(s,3)),c.setIndex(r),c.computeVertexNormals(),c.setAttribute("uv",new ie(new Float32Array(s.length/3*2),2)),c}function Ke(i,t,e,n,s,r,a=0,o=0,l=0){let c=new te(i,t,e);return(a||o||l)&&c.applyMatrix4(new Gt().makeRotationFromEuler(new fn(a,o,l))),c.translate(n,s,r),c}function wx(i,t,e,n,s,r,a,o="y"){let l=new ue(i,t,e,n);return o==="x"&&l.rotateZ(Math.PI/2),o==="z"&&l.rotateX(Math.PI/2),l.translate(s,r,a),l}function Vu(i,t,e){let n=new I().subVectors(t,i),s=n.length(),r=new ue(e,e,s,6);return r.translate(0,s/2,0),r.applyQuaternion(new ge().setFromUnitVectors(new I(0,1,0),n.normalize())),r.translate(i.x,i.y,i.z),r}var Bc=new Map;function Ka(i){if(Bc.has(i))return Bc.get(i);let t=Ex[i],e=t.length,n=-e/2,s=F=>n+F*e,r=t.wheels.map(s),a=t.wheelR+.07,o=i==="coupe",l=o?40:26,c=o?64:40,h=[];for(let F=0;F<=c;F++){let N=F/c,X=s(N),H=Le(t.body.bottom,N);for(let dt of r){let Rt=X-dt;Math.abs(Rt)<a&&(H=Math.max(H,t.wheelR+Math.sqrt(a*a-Rt*Rt)*.98))}let Q=Le(t.body.top,N),it=[];Fc(Le(t.body.width,N),Math.min(H,Q-.08),Q,t.body.exp,t.body.taper,l,it,X),h.push(it)}let u=[Oc(h,l)],f=t.cabin,d=[],x=[],_=F=>Le(f.top,F),m=o?36:20;for(let F=0;F<=m;F++){let N=F/m,X=f.from+N*(f.to-f.from),H=s(X),Q=Le(t.body.top,X)-.06,it=Math.max(_(N),Q+.02),dt=Le(f.width,N),Rt=[];if(Fc(dt,Q,it,f.exp,f.taper,l,Rt,H),d.push(Rt),N>=f.roof[0]&&N<=f.roof[1]){let tt=[];Fc(dt*1.01,Q,it+.012,f.exp,f.taper,14,tt,H,[.2*Math.PI,.8*Math.PI]),x.push(tt)}}let p=[Oc(d,l)];x.length>1&&u.push(Oc(x,14,{closed:!1,caps:!1}));let y=[],b=[],S=[],w=[],A=[],R=(F,N,X)=>{let H=f.from+F*(f.to-f.from),Q=Le(t.body.top,H)-.02,it=_(F),dt=Le(f.width,F)*(1-f.taper*(X?.92:0))*.97;return new I(N*dt,X?it-.02:Q,s(H))};for(let F of[-1,1]){u.push(Vu(R(.02,F,!1),R(f.roof[0]+.01,F,!0),.045));let N=(f.roof[0]+f.roof[1])/2;y.push(Vu(R(N,F,!1),R(N,F,!0),.05));let X=R(.1,F,!1);u.push(Ke(.16,.1,.12,X.x+F*.14,X.y+.06,X.z)),y.push(Ke(.1,.025,.04,X.x+F*.05,X.y+.03,X.z))}let D=F=>Le(t.body.width,F),M=(Le(t.body.bottom,.02)+Le(t.body.top,.02))/2,v=Le(t.body.top,.02);for(let F of[-1,1]){let N=F*D(.02)*.62,X=M+(v-M)*.45;A.push(Ke(.44,.1,.06,N,X,n+.045,0,F*.32,0)),S.push(Ke(.38,.055,.05,N,X+.005,n+.03,0,F*.32,0)),S.push(Ke(.34,.016,.03,N,X+.06,n+.04,0,F*.32,0))}A.push(Ke(D(.03)*1.05,.18,.12,0,Le(t.body.bottom,.02)+.17,n+.06)),y.push(Ke(D(.03)*1.7,.04,.22,0,Le(t.body.bottom,.02)+.02,n+.1));let C=Le(t.body.top,.97);w.push(Ke(D(.98)*1.72,.05,.06,0,C-.08,-n-.02));for(let F of[-1,1])w.push(Ke(.36,.11,.06,F*D(.98)*.68,C-.12,-n-.03));A.push(Ke(D(.98)*1.5,.16,.1,0,Le(t.body.bottom,.98)+.06,-n-.05));for(let F of[-1,1])b.push(wx(.05,.05,.14,12,F*.42,Le(t.body.bottom,.98)+.03,-n+.02,"z"));for(let F of[-1,1]){let N=r[1]-r[0]-a*2;y.push(Ke(.06,.08,N,F*D(.5)*.99,Le(t.body.bottom,.5)+.03,(r[0]+r[1])/2))}if(t.spoiler&&u.push(Ke(D(.96)*1.5,.022,.12,0,Le(t.body.top,.96)+.012,s(.965),-.2)),t.rails)for(let F of[-1,1])y.push(Ke(.05,.05,e*.5,F*.62,Le(f.top,.6)+.04,s(.62)));if(t.bed){let F=s(f.to+.01),N=-n-.05,X=Le(t.body.top,.8);A.push(Ke(D(.8)*1.86,.04,N-F,0,X-.02,(F+N)/2));for(let H of[-1,1])u.push(Ke(.08,.4,N-F,H*D(.8)*.96,X+.2,(F+N)/2));u.push(Ke(D(.8)*1.9,.4,.08,0,X+.2,N))}let L=[Ke(.52,.12,.01,0,Le(t.body.bottom,.99)+.24,-n+.005),Ke(.52,.12,.01,0,Le(t.body.bottom,.01)+.28,n-.005)],O=F=>Gs(F.map(N=>N.index?N.toNonIndexed():N).map(N=>(N.attributes.uv||N.setAttribute("uv",new ie(new Float32Array(N.attributes.position.count*2),2)),N))),V={type:t,parts:{paint:O(u),glass:O(p),trim:O(y),dark:O(A),chrome:O(b),head:O(S),tail:O(w),plate:O(L)},wheels:[],wheel:Tx(t.wheelR,t.wheelW)};for(let F of r)for(let N of[-1,1])V.wheels.push({x:N*t.track,y:t.wheelR,z:F,side:N,front:F<0});return Bc.set(i,V),V}function Tx(i,t){let e=i*.69,n=[[e,-t/2+.01],[i*.86,-t/2-.004],[i*.97,-t/2+.025],[i,-t/2+.06],[i,t/2-.06],[i*.97,t/2-.025],[i*.86,t/2+.004],[e,t/2-.01]].map(([d,x])=>new Lt(d,x)),s=new dr(n,30);s.rotateZ(Math.PI/2);let r=[],a=new ue(e,e,t-.03,24,1,!0);a.rotateZ(Math.PI/2),r.push(a);let o=new Ri(e-.008,.014,6,32);o.rotateY(Math.PI/2),o.translate(t/2-.03,0,0),r.push(o);let l=t/2-.05;for(let d=0;d<10;d++){let x=d/10*Math.PI*2+d%2*.12,_=new te(.035,e-.05,.045);_.translate(0,(e-.05)/2+.05,0),_.rotateX(x),_.translate(l,0,0),r.push(_)}let c=new ue(.07,.08,.05,12);c.rotateZ(Math.PI/2),c.translate(l+.01,0,0),r.push(c);let h=Gs(r.map(d=>d.index?d.toNonIndexed():d)),u=new ue(e*.82,e*.82,.03,24);u.rotateZ(Math.PI/2),u.translate(l-.06,0,0);let f=new te(.07,.16,.12);return f.translate(l-.03,e*.55,.07),{tire:s,rim:h,disc:u,caliper:f}}function Ax(i,t="PCFC 7X"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.fillStyle="#e9e6da",n.fillRect(0,0,256,64),n.fillStyle="#1e3b78",n.font="700 14px Arial",n.textAlign="center",n.fillText("VISTA PAC\xCDFICA",128,16),n.fillStyle="#7a1f1f",n.font='700 34px "Barlow Condensed", Impact, monospace',n.fillText(t,128,52);let s=new qi(e);return s.colorSpace=Qe,s}function Qa(i,t={}){return new As({color:i,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.1,...t})}function ja(i){let t=Ax(i);return{glass:new As({color:791061,metalness:.1,roughness:.04,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.4}),trim:new Ht({color:1316890,roughness:.45,metalness:.4}),dark:new Ht({color:461066,roughness:.6,metalness:.2}),chrome:new Ht({color:14212319,roughness:.12,metalness:1}),plate:new Ht({map:t,roughness:.5}),tire:new Ht({color:1316118,roughness:.92,metalness:0}),rim:new Ht({color:12172994,roughness:.22,metalness:1}),disc:new Ht({color:6053472,roughness:.4,metalness:.9}),caliper:new Ht({color:12728866,roughness:.4,metalness:.3})}}var tl=nn.damp,Un=nn.clamp,el=[3.25,2.15,1.6,1.25,1.02,.86],Rx=3.55,zc=900,Hc=7400;function Cx(i){let t=i/Hc;return Un(.55+1.15*t-.95*t*t*t,.35,1)}var nl=class{constructor(t,e){let n=Ka("coupe");this.dims=n.type;let s=ja(e);this.paint=Qa("#df6339"),this.headMat=new Ht({color:16777215,emissive:16774364,emissiveIntensity:2,roughness:.2}),this.tailMat=new Ht({color:4196358,emissive:16720914,emissiveIntensity:1.5,roughness:.3});let r={paint:this.paint,glass:s.glass,trim:s.trim,dark:s.dark,chrome:s.chrome,head:this.headMat,tail:this.tailMat,plate:s.plate};this.group=new Pe,this.body=new Pe,this.group.add(this.body);for(let[o,l]of Object.entries(n.parts)){let c=new Ft(l,r[o]);c.castShadow=o!=="head"&&o!=="tail",c.receiveShadow=!0,this.body.add(c)}this.wheels=n.wheels.map(o=>{let l=new Pe;l.position.set(o.x,o.y,o.z);let c=new Pe;o.side<0&&(c.rotation.y=Math.PI),l.add(c);let h=new Pe;c.add(h);for(let[u,f]of[["tire",s.tire],["rim",s.rim],["disc",s.disc]]){let d=new Ft(n.wheel[u],f);d.castShadow=!0,h.add(d)}return c.add(new Ft(n.wheel.caliper,s.caliper)),this.group.add(l),{...o,pivot:l,spin:h,mount:c,compress:0}}),this.spots=[];for(let o of[-1,1]){let l=new _r(16773592,0,70,.42,.55,1.4);l.position.set(o*.62,.72,-2.15),l.target.position.set(o*1.6,-.6,-22),this.group.add(l,l.target),this.spots.push(l)}let a=new ue(.12,3.2,16,16,1,!0);a.translate(0,-8,0),a.rotateX(-Math.PI/2+.06),this.beamMat=Or(16773328),this.beams=[];for(let o of[-1,1]){let l=new Wt(a,this.beamMat,1);l.setMatrixAt(0,new Gt().makeTranslation(o*.62,.72,-2.3)),l.userData.noAO=!0,l.layers.set(1),l.frustumCulled=!1,this.group.add(l),this.beams.push(l)}t.add(this.group),this.reset(0,0,0)}setColor(t){this.paint.color.set(t)}reset(t,e,n){this.x=t,this.z=e,this.y=this.groundAt(t,e,0),this.heading=n,this.vx=0,this.vz=0,this.yawRate=0,this.steer=0,this.gear=1,this.rpm=zc,this.shiftTimer=0,this.nitro=100,this.boosting=!1,this.throttle=0,this.brake=0,this.handbrake=!1,this.slip=0,this.wheelspin=0,this.impact=0,this.pitch=0,this.roll=0,this.pitchVel=0,this.rollVel=0,this.heave=0,this.heaveVel=0,this.wheelAngle=0,this.surface="road",this.prevLong=0,this.distance=0,this.sync()}get speed(){return this.vx*-Math.sin(this.heading)+this.vz*-Math.cos(this.heading)}get kmh(){return Math.abs(this.speed)*3.6}groundAt(t,e,n){let s=pi(t,e),r=Du(t);if(s!==null&&(n>s-1.2||t>Yt.x0))return s;let a=Lc(t,e);return a==="curb"||a==="grass"?r+xe:r}update(t,e,n){let s=-Math.sin(this.heading),r=-Math.cos(this.heading),a=Math.cos(this.heading),o=-Math.sin(this.heading),l=this.vx*s+this.vz*r,c=this.vx*a+this.vz*o,h=Math.abs(l);this.surface=Lc(this.x,this.z);let u=pi(this.x,this.z)!==null&&this.y>1,f=this.surface==="sand"&&!u?1:this.surface==="grass"?.5:0;this.throttle=e.throttle,this.brake=e.brake,this.handbrake=e.handbrake;let d=e.steer,x=Math.abs(d)>Math.abs(this.steer)?5.5:8;this.steer=tl(this.steer,d,x,t),this.boosting=e.nitro&&e.throttle>0&&this.nitro>1&&l>3,this.nitro=Un(this.nitro+(this.boosting?-22:9)*t,0,100);let _=h/(2*Math.PI*this.dims.wheelR)*60;l<-.5||this.brake>0&&h<1.2&&this.throttle===0?this.gear=-1:this.gear===-1&&(this.gear=1);let p=this.gear===-1?el[0]:el[this.gear-1],y=_*p*Rx;this.shiftTimer>0?this.shiftTimer-=t:this.gear>0&&(y>Hc-300&&this.gear<el.length?(this.gear++,this.shiftTimer=.22,this.onShift?.(1)):this.gear>1&&y<2700&&!(this.throttle&&y>2e3)&&(this.gear--,this.shiftTimer=.12,this.onShift?.(-1)));let b=this.throttle>0&&h<6&&this.gear===1,S=Un(Math.max(y,zc+(b?3800:0)*this.throttle),zc,Hc);this.rpm=tl(this.rpm,this.shiftTimer>0?S*.82:S,12,t);let w=0;this.throttle>0&&this.gear>0&&this.shiftTimer<=0&&(w+=12.5*Cx(this.rpm)*(p/el[0])*this.throttle*(1-f*.35),this.boosting&&(w+=9)),this.brake>0&&(l>.6?w-=28*this.brake:w-=7*this.brake),this.throttle>0&&l<-.6&&(w+=26),w-=l*Math.abs(l)*(.0029+f*.006),w-=Math.sign(l)*Math.min(Math.abs(l)/t,.25+f*2.6),!this.throttle&&!this.brake&&(w-=Math.sign(l)*Math.min(Math.abs(l)/t,.9)),this.handbrake&&(w-=Math.sign(l)*Math.min(Math.abs(l)/t,5)),l+=w*t,l=Un(l,-14,this.boosting?74:64);let A=11-f*6;this.handbrake&&(A=1.2);let R=Math.abs(c)/(h+4);R>.18&&!this.handbrake&&(A*=.55),c*=Math.exp(-A*t),this.slip=Math.abs(c);let D=(this.dims.wheels[1]-this.dims.wheels[0])*this.dims.length,M=.62/(1+h*.04);this.wheelAngle=this.steer*M;let v=l*Math.tan(this.wheelAngle)/D,L=(this.handbrake?24:15)*(1-f*.4)/Math.max(h,4);v=Un(v,-L,L),this.handbrake&&h>6&&(v*=1.5),R>.18&&(v+=this.steer*.6*Math.min(h/20,1)),this.yawRate=tl(this.yawRate,v,7.5,t),this.heading+=this.yawRate*t,this.vx=s*l+a*c,this.vz=r*l+o*c;let O=this.x,V=this.z;this.x+=this.vx*t,this.z+=this.vz*t,this.wheelspin=b&&this.throttle>0?Un(1-h/8,0,1):0,this.impact=0,this.collide(n,O,V),this.distance+=Math.hypot(this.x-O,this.z-V);let F=this.groundAt(this.x,this.z,this.y);F-this.y>.08&&F-this.y<.3&&(this.heaveVel-=(F-this.y)*9),this.y=tl(this.y,F,F>this.y?22:9,t);let N=(l-this.prevLong)/t;this.prevLong=l;let X=l*this.yawRate,H=this.slopeAt();this.spring("pitch",Un(N*.0022,-.055,.04)+H,70,9,t),this.spring("roll",Un(X*.0055,-.08,.08),60,8,t),this.spring("heave",0,90,10,t),this.sync();for(let Q of this.wheels)Q.spin.rotation.x-=l*t/this.dims.wheelR*(Q.side<0?-1:1)*(Q.front?1:1+this.wheelspin*2.5),Q.front&&(Q.pivot.rotation.y=this.wheelAngle)}slopeAt(){return pi(this.x,this.z)!==null&&this.x>Yt.x0&&this.y>.2?Math.atan2(Yt.deckY-xe,Yt.rampStart-Yt.x0)*Math.sin(this.heading):0}spring(t,e,n,s,r){let a=t+"Vel",o=(e-this[t])*n-this[a]*s;this[a]+=o*r,this[t]+=this[a]*r}sync(){this.group.position.set(this.x,this.y+this.heave*.4,this.z),this.group.rotation.set(0,this.heading,0),this.body.rotation.set(this.pitch,0,-this.roll),this.body.position.y=this.heave*.3}collide(t,e,n){let r=-Math.sin(this.heading),a=-Math.cos(this.heading);for(let c=0;c<2;c++)for(let h of[-1.35,1.35]){let u=this.x+r*h,f=this.z+a*h;for(let x of t.colliders){if(Math.abs(u-x.x)>x.w+1.05||Math.abs(f-x.z)>x.d+1.05)continue;let _=Un(u,x.x-x.w,x.x+x.w),m=Un(f,x.z-x.d,x.z+x.d),p=u-_,y=f-m,b=Math.hypot(p,y);if(b<1e-4){let S=x.w-Math.abs(u-x.x),w=x.d-Math.abs(f-x.z);S<w?(p=Math.sign(u-x.x),y=0,b=-S):(p=0,y=Math.sign(f-x.z),b=-w)}else p/=b,y/=b;b<1.05&&this.resolve(p,y,1.05-b,.25)}let d=this.y<(pi(u,f)??-9)-1;for(let x of d?[t.circles,t.piles]:[t.circles])for(let _ of x){let m=u-_.x,p=f-_.z;if(Math.abs(m)>3||Math.abs(p)>3)continue;let y=Math.hypot(m,p),b=1.05+_.r;y<b&&y>1e-4&&this.resolve(m/y,p/y,b-y,.2)}}if(this.y>1.2&&pi(e,n)!==null){let c=Yt.halfWidth-1.1;Math.abs(this.z-Yt.z)>c&&this.resolve(0,-Math.sign(this.z-Yt.z),Math.abs(this.z-Yt.z)-c,.15),this.x<Yt.x1+3&&this.resolve(1,0,Yt.x1+3-this.x,.15)}let o=pi(this.x,this.z);if(o!==null&&this.x>Yt.x0&&this.y<o-.9&&this.x<-345){let c=Math.sign(this.z-Yt.z)||1;this.resolve(0,c,Yt.halfWidth+.2-Math.abs(this.z-Yt.z),.2)}let l=this.y>1.2&&Math.abs(this.z-Yt.z)<Yt.halfWidth?Yt.x1+3:Je.minX;this.x<l&&this.resolve(1,0,l-this.x,.2),this.x>Je.maxX&&this.resolve(-1,0,this.x-Je.maxX,.3),this.z<Je.minZ&&this.resolve(0,1,Je.minZ-this.z,.3),this.z>Je.maxZ&&this.resolve(0,-1,this.z-Je.maxZ,.3)}resolve(t,e,n,s){this.x+=t*n,this.z+=e*n;let r=this.vx*t+this.vz*e;r<0&&(this.vx-=(1+s)*r*t,this.vz-=(1+s)*r*e,this.vx*=.9,this.vz*=.9,this.impact=Math.max(this.impact,-r),this.yawRate*=.6)}setLights(t,e,n){let s=Math.max(t,.15);this.headMat.emissiveIntensity=1.5+s*9,this.tailMat.emissiveIntensity=e?6:1.1+t*1.2;for(let r of this.spots)r.intensity=t*220;this.beamMat.uniforms.intensity.value=t*.06;for(let r of this.beams)r.visible=t>.05}safeRespawn(){let t=kn(he,this.x),e=kn(fe,this.z);if(Math.abs(this.x-t)<Math.abs(this.z-e)){let n=Math.cos(this.heading)>0;this.reset(t+(n?3.4:-3.4),Un(this.z,-470,470),n?0:Math.PI)}else{let n=Math.sin(this.heading)<0;this.reset(Un(this.x,-310,310),e+(n?3.4:-3.4),n?-Math.PI/2:Math.PI/2)}}};var Px=[["sedan",13],["suv",9],["hatch",9],["pickup",6],["taxi",7]],Ix=["#e9e9e6","#e9e9e6","#151719","#151719","#9ea3a6","#5d6265","#1f3a5f","#8e1c1c","#c9b99a","#2e4a3a","#6b7d8c","#3a2f2a"],gi=new Gt,Br=new ge,il=new I,zr=new I(1,1,1),Gc=new I(0,1,0),Dx=new I(1,0,0),sl=new Gt,kc=new ge,Lx=new ge().setFromAxisAngle(Gc,Math.PI);function Ux(i,t){return i==="ns"?-t:t}function Gu(i,t){return i==="ns"?t<0?0:Math.PI:t>0?-Math.PI/2:Math.PI/2}function Vc(i,t){return i==="ns"?[0,t]:[t,0]}function rl(i,t,e,n,s){let r=Ux(i,e)*Ic[n];return i==="ns"?[t+r,s]:[s,t+r]}var ol=class{constructor(t,e){this.cars=[],this.meshes=[],this.wheelMeshes=[],this.events=[];let n=ja(e);this.headMat=new Ht({color:16777215,emissive:16773846,emissiveIntensity:1,roughness:.2}),this.tailMat=new Ht({color:3802885,emissive:16719888,emissiveIntensity:1,roughness:.3}),this.tailMat.onBeforeCompile=h=>{h.fragmentShader=h.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},this.tailMat.customProgramCacheKey=()=>"tail-inst";let s=$e(e,128,32,(h,u,f)=>{h.fillStyle="#f7d046",h.fillRect(0,0,u,f),h.fillStyle="#1a1a1a",h.font='800 24px "Barlow Condensed", Impact, sans-serif',h.textAlign="center",h.fillText("TAXI",u/2,25)});this.taxiSignMat=new Ht({map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:.3});let r=0;for(let[h,u]of Px){let d=Ka(h==="taxi"?"sedan":h),_={paint:Qa(16777215,{metalness:.45,roughness:.38}),glass:n.glass,trim:n.trim,dark:n.dark,chrome:n.chrome,head:this.headMat,tail:this.tailMat,plate:n.plate},m={};for(let[w,A]of Object.entries(d.parts)){let R=new Wt(A,_[w],u);R.castShadow=w==="paint"||w==="glass",R.receiveShadow=!0,R.frustumCulled=!1,R.instanceMatrix.setUsage(fi),t.add(R),m[w]=R,this.meshes.push(R)}let p=new Wt(d.wheel.tire,n.tire,u*4),y=new Wt(d.wheel.rim,n.rim,u*4);for(let w of[p,y])w.frustumCulled=!1,w.castShadow=w===p,w.instanceMatrix.setUsage(fi),t.add(w);let b=null;h==="taxi"&&(b=new Wt(new te(.62,.2,.26),this.taxiSignMat,u),b.frustumCulled=!1,t.add(b));let S=Math.max(...d.type.cabin.top.map(w=>w[1]));for(let w=0;w<u;w++){let A=h==="taxi"?"#f2c230":De(Ix);m.paint.setColorAt(w,new gt(A)),m.tail.setColorAt(w,new gt(1,1,1));let R=this.spawn({typeName:h,slot:w,parts:m,tire:p,rim:y,sign:b,geo:d,roofY:S,index:r++});this.cars.push(R)}}let a=$e(e,64,128,(h,u,f)=>{let d=h.createRadialGradient(u/2,f/2,4,u/2,f/2,f/2);d.addColorStop(0,"rgba(0,0,0,0.75)"),d.addColorStop(.55,"rgba(0,0,0,0.45)"),d.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=d,h.fillRect(0,0,u,f)}),o=new Se(2.6,5.6);o.rotateX(-Math.PI/2),this.blobs=new Wt(o,new Ne({map:a,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),this.cars.length+1),this.blobs.frustumCulled=!1,this.blobs.renderOrder=1,this.blobs.userData.noAO=!0,t.add(this.blobs);let l=$e(e,64,128,(h,u,f)=>{let d=h.createRadialGradient(u/2,f*.75,2,u/2,f*.6,f*.6);d.addColorStop(0,"rgba(255,255,255,0.9)"),d.addColorStop(.5,"rgba(255,255,255,0.3)"),d.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=d,h.fillRect(0,0,u,f)}),c=new Se(6,14);c.rotateX(-Math.PI/2),c.translate(0,0,-9.5),this.poolMat=new Ne({map:l,color:16773328,transparent:!0,depthWrite:!1,blending:gn,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2}),this.pools=new Wt(c,this.poolMat,this.cars.length),this.pools.frustumCulled=!1,this.pools.layers.set(1),this.pools.userData.noAO=!0,t.add(this.pools)}spawn(t){for(let e=0;e<40;e++){let n=Dt()<.55?"ns":"ew",s=n==="ns"?De(he):De(fe),r=Dt()<.5?1:-1,a=Dt()<.5?0:1,o=n==="ns"?ht(-470,470):ht(-310,310),l=this.cars.some(h=>h.axis===n&&h.road===s&&h.dir===r&&h.lane===a&&Math.abs(h.s-o)<18),c=(n==="ns"?fe:he).some(h=>Math.abs(h-o)<24);if(Object.assign(t,{axis:n,road:s,dir:r,lane:a,s:o}),!l&&!c)break}return t.cruise=ht(11,16.5),t.speed=t.cruise*.6,t.turn=null,t.decided=null,t.hit=null,t.offset=null,t.braking=!1,t.blockedTime=0,t.wheelSpin=0,t.x=0,t.z=0,t.heading=0,this.place(t),t}place(t){if(t.turn){let e=t.turn,n=e.t*Math.PI/2,s=Math.cos(n),r=Math.sin(n);t.x=e.O[0]+e.u[0]*s+e.v[0]*r,t.z=e.O[1]+e.u[1]*s+e.v[1]*r;let a=-e.u[0]*r+e.v[0]*s,o=-e.u[1]*r+e.v[1]*s;t.heading=Math.atan2(-a,-o)}else[t.x,t.z]=rl(t.axis,t.road,t.dir,t.lane,t.s),t.heading=Gu(t.axis,t.dir)}nextCross(t){let e=t.axis==="ns"?fe:he,n=null;for(let s of e){let r=(s-t.s)*t.dir;r>-1&&(n===null||r<(n-t.s)*t.dir)&&(n=s)}return n}exitValid(t,e,n){let s=t==="ns"?fe:he;return e>0?n<s[s.length-1]:n>s[0]}planTurn(t,e){let n=t.axis==="ns"?t.dir<0?"N":"S":t.dir>0?"E":"W",s={N:"E",E:"S",S:"W",W:"N"}[n],r={N:"W",W:"S",S:"E",E:"N"}[n],a=M=>M==="N"?["ns",-1]:M==="S"?["ns",1]:M==="E"?["ew",1]:["ew",-1],o=M=>{let[v,C]=a(M);return v===t.axis?this.exitValid(v,C,e):this.exitValid(v,C,t.road)},l=[];o(n)&&l.push(["straight",t.lane===1?.6:.72]),o(s)&&l.push(["right",t.lane===1?.4:.08]),o(r)&&l.push(["left",t.lane===0?.28:.06]);let c=l.reduce((M,v)=>M+v[1],0),h=Dt()*c,u=l[0][0];for(let[M,v]of l)if((h-=v)<=0){u=M;break}if(u==="straight")return null;let[f,d]=a(u==="right"?s:r),x=t.lane,_=e,m=rl(t.axis,t.road,t.dir,t.lane,0),p=rl(f,_,d,x,0),y=t.axis==="ns"?[m[0],p[1]]:[p[0],m[1]],b=Vc(t.axis,t.dir),S=Vc(f,d),w=u==="right"?6.5:10.5,A=[y[0]-b[0]*w,y[1]-b[1]*w],R=[y[0]+S[0]*w,y[1]+S[1]*w],D=[A[0]+S[0]*w,A[1]+S[1]*w];return{startS:t.axis==="ns"?A[1]:A[0],O:D,u:[A[0]-D[0],A[1]-D[1]],v:[R[0]-D[0],R[1]-D[1]],t:0,len:w*Math.PI/2,next:{axis:f,road:_,dir:d,lane:x,s:f==="ns"?R[1]:R[0]}}}update(t,e,n,s){let r=n.x,a=n.z;for(let o of this.cars){if(o.hit){let m=o.hit;o.x+=m.vx*t,o.z+=m.vz*t;let p=Math.exp(-1.8*t);if(m.vx*=p,m.vz*=p,o.heading+=m.spin*t,m.spin*=Math.exp(-2.5*t),m.t-=t,o.speed=0,m.t<=0){o.hit=null,o.turn=null,o.s=o.axis==="ns"?o.z:o.x;let[y,b]=rl(o.axis,o.road,o.dir,o.lane,o.s);o.offset={dx:o.x-y,dz:o.z-b,dh:Fx(o.heading-Gu(o.axis,o.dir)),t:1},o.decided=null}continue}let l=o.cruise,[c,h]=o.turn?[-Math.sin(o.heading),-Math.cos(o.heading)]:Vc(o.axis,o.dir);if(o.turn)l=Math.min(l,8);else{let m=this.nextCross(o);if(m!==null){let p=(m-o.s)*o.dir;p<34&&o.decided!==m&&(o.decided=m,o.plan=this.planTurn(o,m),!o.plan&&!this.exitValid(o.axis,o.dir,m)&&(o.plan=null));let y=p-20.5,b=Ja(o.axis==="ns"?0:1,e);y>-1&&(b===0||b===1&&y>9)&&(l=Math.min(l,Math.sqrt(Math.max(0,y-.5))*2.4)),o.plan&&(l=Math.min(l,o.plan.next.lane===0?9:7.5)),!o.plan&&!this.exitValid(o.axis,o.dir,m)&&(l=Math.min(l,Math.sqrt(Math.max(0,y))*2))}for(let p of this.cars){if(p===o||p.turn||p.axis!==o.axis||p.road!==o.road||p.dir!==o.dir||p.lane!==o.lane)continue;let y=(p.s-o.s)*o.dir;y>0&&y<45&&(l=Math.min(l,Math.max(0,y-7.5)*.9))}}let u=r-o.x,f=a-o.z,d=u*c+f*h,x=Math.abs(u*h-f*c);d>0&&d<32&&x<2.6?(l=Math.min(l,Math.max(0,d-6.5)*.85),o.speed<1&&n.kmh<5&&(o.blockedTime+=t,o.blockedTime>2.5&&(o.blockedTime=-4,s?.(o)))):o.blockedTime=Math.max(0,o.blockedTime-t);let _=l>o.speed?3.2:9;if(o.speed+=Math.sign(l-o.speed)*Math.min(Math.abs(l-o.speed),_*t),o.braking=l<o.speed-.3||o.speed<.5&&l<.5,o.turn?(o.turn.t+=o.speed*t/o.turn.len,o.turn.t>=1&&(Object.assign(o,o.turn.next),o.turn=null,o.decided=null)):(o.s+=o.speed*o.dir*t,o.plan&&(o.s-o.plan.startS)*o.dir>=0&&(o.turn=o.plan,o.plan=null)),this.place(o),o.offset){let m=o.offset;if(m.t-=t/1.6,m.t<=0)o.offset=null;else{let p=m.t*m.t;o.x+=m.dx*p,o.z+=m.dz*p,o.heading+=m.dh*p}}o.wheelSpin-=o.speed*t/o.geo.type.wheelR}this.collidePlayer(n)}collidePlayer(t){let e=[-Math.sin(t.heading),-Math.cos(t.heading)];for(let n of this.cars){let s=t.x-n.x,r=t.z-n.z;if(s*s+r*r>64)continue;let a=[-Math.sin(n.heading),-Math.cos(n.heading)],o=n.geo.type.length/2-1.05;for(let l of[-1.3,1.3])for(let c of[-o,o]){let h=t.x+e[0]*l,u=t.z+e[1]*l,f=n.x+a[0]*c,d=n.z+a[1]*c,x=h-f,_=u-d,m=Math.hypot(x,_);if(m>2.15||m<1e-4)continue;x/=m,_/=m;let p=2.15-m;t.x+=x*p*.6,t.z+=_*p*.6;let y=n.hit?n.hit.vx:a[0]*n.speed,b=n.hit?n.hit.vz:a[1]*n.speed,S=(t.vx-y)*x+(t.vz-b)*_;if(S<0){let w=-1.3*S/2;t.vx+=w*x,t.vz+=w*_,t.impact=Math.max(t.impact,-S),n.hit||(n.hit={vx:y,vz:b,spin:0,t:0}),n.hit.vx-=w*x,n.hit.vz-=w*_,n.hit.spin+=(Dt()-.5)*Math.min(-S,20)*.25,n.hit.t=2.8,n.turn=null,n.plan=null}else n.hit||(n.hit={vx:-x*1.5,vz:-_*1.5,spin:0,t:.6});n.x-=x*p*.4,n.z-=_*p*.4}}}sync(t,e){let n=0;this.cars.forEach((s,r)=>{Br.setFromAxisAngle(Gc,s.heading),gi.compose(il.set(s.x,.02,s.z),Br,zr);for(let a of Object.values(s.parts))a.setMatrixAt(s.slot,gi);if(s.sign){let a=gi.clone().multiply(new Gt().makeTranslation(0,s.roofY+.1,.1));s.sign.setMatrixAt(s.slot,a)}s.parts.tail.setColorAt(s.slot,Nx.setScalar(s.braking?4:1)),s.geo.wheels.forEach((a,o)=>{kc.setFromAxisAngle(Dx,s.wheelSpin*(a.side<0?-1:1)),a.side<0&&kc.premultiply(Lx),sl.compose(il.set(a.x,a.y,a.z),kc,zr),sl.premultiply(gi),s.tire.setMatrixAt(s.slot*4+o,sl),s.rim.setMatrixAt(s.slot*4+o,sl)}),gi.compose(il.set(s.x,.035,s.z),Br,zr),this.blobs.setMatrixAt(n++,gi),this.pools.setMatrixAt(r,gi)}),Br.setFromAxisAngle(Gc,e.heading),gi.compose(il.set(e.x,e.y+.035,e.z),Br,zr.set(1.05,1,1)),zr.set(1,1,1),this.blobs.setMatrixAt(n,gi),this.blobs.instanceMatrix.needsUpdate=!0,this.pools.instanceMatrix.needsUpdate=!0;for(let s of this.meshes)s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0);for(let s of this.cars)s.tire.instanceMatrix.needsUpdate=!0,s.rim.instanceMatrix.needsUpdate=!0,s.sign&&(s.sign.instanceMatrix.needsUpdate=!0);this.headMat.emissiveIntensity=1+t*8,this.tailMat.emissiveIntensity=.8+t*2.2,this.taxiSignMat.emissiveIntensity=.3+t*2.5,this.poolMat.opacity=t*.55}nearest(t,e){let n=1/0;for(let s of this.cars)n=Math.min(n,Math.hypot(s.x-t,s.z-e));return n}},Nx=new gt;function Fx(i){return Math.atan2(Math.sin(i),Math.cos(i))}var Ox=`
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
}`,Bx=`
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
}`,zx=`
uniform sampler2D map;
varying vec2 vUv;
varying float vAlpha;
varying float vAge;
varying vec3 vColor;
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor * t.a * vAlpha, 1.0);
}`,Ws=class{constructor(t,e,{texture:n,additive:s=!1,drag:r=1.5,gravity:a=0,grow:o=1.5}){this.max=e,this.drag=r,this.gravity=a,this.grow=o,this.count=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.rot=new Float32Array(e),this.spin=new Float32Array(e),this.col=new Float32Array(e*3);let l=new Mr,c=new Se(1,1);l.index=c.index,l.setAttribute("position",c.attributes.position),l.setAttribute("uv",c.attributes.uv),this.aPos=new an(new Float32Array(e*3),3).setUsage(fi),this.aData=new an(new Float32Array(e*4),4).setUsage(fi),this.aColor=new an(new Float32Array(e*3),3).setUsage(fi),l.setAttribute("aPos",this.aPos),l.setAttribute("aData",this.aData),l.setAttribute("aColor",this.aColor),l.instanceCount=0,this.uniforms={map:{value:n},light:{value:new gt(1,1,1)}};let h=new le({uniforms:this.uniforms,vertexShader:Ox,fragmentShader:s?zx:Bx,transparent:!0,depthWrite:!1,blending:s?gn:ai});this.mesh=new Ft(l,h),this.mesh.frustumCulled=!1,this.mesh.renderOrder=s?6:5,this.mesh.userData.noAO=!0,this.mesh.layers.set(1),this.geo=l,t.add(this.mesh)}emit(t,e,n,s,r,a,o,l,c,h=1,u=1,f=1){let d=this.count;if(d>=this.max){let x=0;for(let _=1;_<this.max;_++)this.life[_]<this.life[x]&&(x=_);d=x}else this.count++;this.p.set([t,e,n],d*3),this.v.set([s,r,a],d*3),this.col.set([h,u,f],d*3),this.life[d]=this.maxLife[d]=l,this.size[d]=o,this.alpha[d]=c,this.rot[d]=Dt()*Math.PI*2,this.spin[d]=(Dt()-.5)*1.2}update(t){let e=Math.exp(-this.drag*t),n=0;for(let s=0;s<this.count;s++){if(this.life[s]-=t,this.life[s]<=0)continue;if(n!==s){for(let[l,c]of[[this.p,3],[this.v,3],[this.col,3]])l.copyWithin(n*c,s*c,s*c+c);this.life[n]=this.life[s],this.maxLife[n]=this.maxLife[s],this.size[n]=this.size[s],this.alpha[n]=this.alpha[s],this.rot[n]=this.rot[s],this.spin[n]=this.spin[s]}let r=n*3;this.v[r]*=e,this.v[r+1]=this.v[r+1]*e+this.gravity*t,this.v[r+2]*=e,this.p[r]+=this.v[r]*t,this.p[r+1]+=this.v[r+1]*t,this.p[r+2]+=this.v[r+2]*t,this.rot[n]+=this.spin[n]*t;let a=1-this.life[n]/this.maxLife[n],o=Math.min(a*6,1)*(1-a)*(1-a);this.aPos.array.set([this.p[r],this.p[r+1],this.p[r+2]],r),this.aData.array.set([this.size[n]*(1+a*this.grow),this.alpha[n]*o,this.rot[n],a],n*4),this.aColor.array.set([this.col[r],this.col[r+1],this.col[r+2]],r),n++}this.count=n,this.geo.instanceCount=n,this.aPos.needsUpdate=this.aData.needsUpdate=this.aColor.needsUpdate=!0}};function Wu(i,t){let e=$e(t,128,128,(s,r,a)=>{let o=s.createImageData(r,a);for(let l=0;l<a;l++)for(let c=0;c<r;c++){let h=(c-r/2)/(r/2),u=(l-a/2)/(a/2),f=Math.sqrt(h*h+u*u),d=.65+.35*Math.sin(c*.31+Math.sin(l*.23)*3)*Math.sin(l*.27+Math.cos(c*.19)*2),x=Math.max(0,1-f)**1.6*d,_=(l*r+c)*4;o.data[_]=o.data[_+1]=o.data[_+2]=200+d*55,o.data[_+3]=Math.min(255,x*255)}s.putImageData(o,0,0)},{srgb:!1}),n=$e(t,64,64,(s,r,a)=>{let o=s.createRadialGradient(r/2,a/2,0,r/2,a/2,r/2);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.3,"rgba(255,255,255,0.6)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,r,a)},{srgb:!1});return{smoke:new Ws(i,420,{texture:e,drag:1.1,gravity:.35,grow:2.6}),dust:new Ws(i,200,{texture:e,drag:1.6,gravity:-.2,grow:2}),sparks:new Ws(i,160,{texture:n,additive:!0,drag:.6,gravity:-9.8,grow:-.6}),flames:new Ws(i,120,{texture:n,additive:!0,drag:3,gravity:.5,grow:-.4})}}var al=class{constructor(t,e=900){this.max=e,this.index=0;let n=new Se(1,1);n.rotateX(-Math.PI/2),this.mat=new Ht({color:328965,transparent:!0,opacity:.55,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),this.mesh=new Wt(n,this.mat,e),this.mesh.instanceMatrix.setUsage(fi),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.mesh.renderOrder=1,this.mesh.userData.noAO=!0;let s=new Gt().makeScale(0,0,0);for(let r=0;r<e;r++)this.mesh.setMatrixAt(r,s);this.last=new Map,t.add(this.mesh),this.m=new Gt,this.q=new ge,this.v=new I,this.s=new I,this.up=new I(0,1,0)}add(t,e,n,s,r,a=.26){let o=this.last.get(t);if(!r){this.last.delete(t);return}if(o){let l=e-o[0],c=s-o[2],h=Math.hypot(l,c);if(h<.35)return;h<4&&(this.q.setFromAxisAngle(this.up,Math.atan2(l,c)),this.m.compose(this.v.set((e+o[0])/2,n+.03,(s+o[2])/2),this.q,this.s.set(a,1,h+.05)),this.mesh.setMatrixAt(this.index,this.m),this.index=(this.index+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0)}this.last.set(t,[e,n,s])}};var Hr=nn.damp,Wc=["CHASE CAMERA","FAR CHASE CAMERA","HOOD CAMERA","CINEMATIC CAMERA"],ll=class{constructor(t){this.camera=t,this.mode=0,this.pos=new I,this.look=new I,this.desired=new I,this.target=new I,this.yaw=0,this.shake=0,this.cine=null,this.cineTimer=0,this.baseFov=55}snap(t){this.yaw=t.heading,this.cine=null,this.compute(t,0),this.pos.copy(this.desired),this.look.copy(this.target),this.apply(0)}compute(t,e){let n=Math.min(Math.abs(t.speed)/55,1),s=Math.hypot(t.vx,t.vz)>4?Math.atan2(-t.vx,-t.vz):t.heading,r=t.heading+Xu(s-t.heading)*.35;t.speed<-1&&(r=t.heading),this.yaw=e?this.yaw+Xu(r-this.yaw)*(1-Math.exp(-4.5*e)):r;let a=Math.sin(this.yaw),o=Math.cos(this.yaw),l=t.group.position;if(this.mode===2){let c=Math.sin(t.heading),h=Math.cos(t.heading);this.desired.set(l.x-c*.15,l.y+1.18,l.z-h*.15),this.target.set(l.x-c*30,l.y+.9,l.z-h*30)}else if(this.mode===3)this.cinematic(t,e);else{let c=this.mode===1,h=(c?11.5:7.4)+n*1.6,u=(c?4.6:2.45)+n*.25;this.desired.set(l.x+a*h,l.y+u,l.z+o*h),this.target.set(l.x-a*6,l.y+1.15,l.z-o*6)}}cinematic(t,e){let n=t.group.position;this.cineTimer-=e;let s=-Math.sin(t.heading),r=-Math.cos(t.heading);if(!this.cine||this.cine.distanceTo(n)>70||this.cineTimer<=0){let o=Math.random()<.5?-1:1,l=28+Math.abs(t.speed)*1.6;this.cine=new I(n.x+s*l+r*o*7,n.y+.7+Math.random()*2.5,n.z+r*l-s*o*7),this.cineTimer=7,this.pos.copy(this.cine)}this.desired.copy(this.cine),this.target.set(n.x,n.y+.8,n.z)}apply(t){let e=this.camera;if(e.position.copy(this.pos),this.shake>.001){let n=this.shake;e.position.x+=(Math.random()-.5)*n,e.position.y+=(Math.random()-.5)*n,e.position.z+=(Math.random()-.5)*n,this.shake=Hr(this.shake,0,6,t||.016)}e.lookAt(this.look)}update(t,e){this.compute(t,e),this.mode===2?(this.pos.copy(this.desired),this.look.copy(this.target)):this.mode===3?(this.pos.lerp(this.desired,1-Math.exp(-3*e)),this.look.lerp(this.target,1-Math.exp(-10*e))):(this.pos.x=Hr(this.pos.x,this.desired.x,9,e),this.pos.z=Hr(this.pos.z,this.desired.z,9,e),this.pos.y=Hr(this.pos.y,this.desired.y,6,e),this.look.lerp(this.target,1-Math.exp(-12*e)));let n=Math.min(Math.abs(t.speed)/60,1)*12,s=(this.mode===2?68:this.mode===3?40:this.baseFov)+(this.mode===3?0:n+(t.boosting?7:0));this.camera.fov=Hr(this.camera.fov,s,3,e),this.camera.updateProjectionMatrix(),t.boosting&&(this.shake=Math.max(this.shake,.035)),this.apply(e)}orbit(t,e){let n=t.group.position,s=2.25+Math.sin(e*.05)*.5;this.camera.position.set(n.x+Math.sin(s)*9.5,n.y+1.6+Math.sin(e*.11)*.25,n.z+Math.cos(s)*9.5),this.camera.fov=42,this.camera.updateProjectionMatrix(),this.camera.lookAt(n.x-1.5,n.y+1.1,n.z-2)}};function Xu(i){return Math.atan2(Math.sin(i),Math.cos(i))}var qu=i=>document.getElementById(i),Oe={x0:-760,x1:420,z0:-640,z1:640};function Hx(i){let t=document.createElement("canvas");t.width=Oe.x1-Oe.x0,t.height=Oe.z1-Oe.z0;let e=t.getContext("2d");e.translate(-Oe.x0,-Oe.z0),e.fillStyle="#16343f",e.fillRect(Oe.x0,Oe.z0,t.width,t.height),e.fillStyle="#1e2a2e",e.fillRect(An,Oe.z0,Oe.x1-An,t.height),e.fillStyle="#6d6047",e.fillRect(An,Oe.z0,Ve-An,t.height),e.fillStyle="#2d4433",e.fillRect(Ve,Oe.z0,Fe.to-Ve,t.height),e.fillStyle="#29353a";for(let n of ks)for(let s of Vs)e.fillRect(n-Ln/2,s-Ln/2,Ln,Ln);e.fillStyle="#2f4a35";for(let[n,s]of[[-80,80],[240,400]])e.fillRect(n-55,s-55,110,110);e.fillStyle="#3e4f56";for(let n of i)e.fillRect(n.x-n.w,n.z-n.d,n.w*2,n.d*2);e.fillStyle="#5b6b6e";for(let n of he)e.fillRect(n-se,fe[0]-se,se*2,fe[fe.length-1]-fe[0]+se*2);for(let n of fe)e.fillRect(he[0]-se,n-se,he[he.length-1]-he[0]+se*2,se*2);return e.fillStyle="#7d6a52",e.fillRect(Yt.x1,Yt.z-Yt.halfWidth,Yt.rampStart-Yt.x1,Yt.halfWidth*2),t}var cl=class{constructor(t){this.canvas=qu("minimap"),this.ctx=this.canvas.getContext("2d"),this.mapImage=Hx(t),this.expanded=!1,this.els={};for(let e of["speed","gear","tach-fill","boost-fill","district","road-name","heading","race-time","checkpoint-distance","clock","rpm-readout"])this.els[e]=qu(e);this.last={}}set(t,e){this.last[t]!==e&&(this.last[t]=e,this.els[t]&&(this.els[t].textContent=e))}update(t,e,n,s){let r=Math.round(t.kmh);this.set("speed",String(r).padStart(3,"0")),this.set("gear",t.gear<0?"R":r<1&&!t.throttle?"N":String(t.gear)),this.els["tach-fill"].style.width=Math.min(100,t.rpm/7400*100).toFixed(1)+"%",this.els["tach-fill"].classList.toggle("redline",t.rpm>6600),this.els["boost-fill"].style.width=t.nitro.toFixed(1)+"%",this.els["boost-fill"].classList.toggle("active",t.boosting),this.set("rpm-readout",(t.rpm/1e3).toFixed(1));let[a]=Lu(t.x,t.z);this.set("district",a),this.set("road-name",Uu(t.x,t.z));let o=["N","NW","W","SW","S","SE","E","NE"];if(this.set("heading",o[(Math.round(t.heading/(Math.PI/4))%8+8)%8]),this.set("clock",s.clockLabel),e.mode==="race"){this.set("race-time",hl(e.raceTime));let l=e.route[e.checkpoint];l&&this.set("checkpoint-distance",Math.round(Math.hypot(l[0]-t.x,l[1]-t.z))+" M")}this.drawMap(t,e,n)}drawMap(t,e,n){let{canvas:s,ctx:r}=this,a=s.width,o=s.height;if(r.setTransform(1,0,0,1,0,0),r.fillStyle="#16343f",r.fillRect(0,0,a,o),r.save(),this.expanded){let c=Math.min(a/(Oe.x1-Oe.x0),o/(Oe.z1-Oe.z0));r.translate(a/2,o/2),r.scale(c,c),r.translate(-(Oe.x0+Oe.x1)/2,-(Oe.z0+Oe.z1)/2)}else r.translate(a/2,o*.62),r.scale(.85,.85),r.rotate(t.heading),r.translate(-t.x,-t.z);r.drawImage(this.mapImage,Oe.x0,Oe.z0),r.fillStyle="#c9d3d6";for(let c of n.cars)r.fillRect(c.x-2,c.z-2,4,4);if(e.mode==="race"&&e.checkpoint<e.route.length){let[c,h]=e.route[e.checkpoint];r.strokeStyle="#ffc686cc",r.lineWidth=this.expanded?4:3,r.setLineDash([7,6]),r.beginPath(),r.moveTo(t.x,t.z),r.lineTo(c,h),r.stroke(),r.setLineDash([]),e.route.forEach(([u,f],d)=>{d<e.checkpoint||(r.beginPath(),r.arc(u,f,d===e.checkpoint?11:6,0,Math.PI*2),r.fillStyle=d===e.checkpoint?"#ffc686":"#ffc68666",r.fill())})}r.translate(t.x,t.z),r.rotate(-t.heading);let l=this.expanded?2.4:1;if(r.shadowColor="#000",r.shadowBlur=8,r.fillStyle="#ff8a52",r.beginPath(),r.moveTo(0,-13*l),r.lineTo(8*l,9*l),r.lineTo(0,4*l),r.lineTo(-8*l,9*l),r.closePath(),r.fill(),r.restore(),!this.expanded){let c=t.heading,h=a/2+Math.sin(-c)*-(o*.42),u=o*.62-Math.cos(c)*(o*.42);r.fillStyle="#fff4dc",r.font="600 22px Barlow, Arial",r.textAlign="center",r.textBaseline="middle",r.fillText("N",Math.min(a-16,Math.max(16,h)),Math.min(o-16,Math.max(16,u)))}}setExpanded(t){this.expanded=t,this.canvas.width=t?1100:480,this.canvas.height=t?1100:360}};function hl(i){let t=Math.floor(i/60),e=Math.floor(i%60),n=Math.floor(i*100%100);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(n).padStart(2,"0")}`}var ul=class{constructor(){this.ctx=null,this.enabled=!1}start(){if(this.ctx){this.ctx.resume();return}let t;try{t=new(window.AudioContext||window.webkitAudioContext)}catch{return}this.ctx=t;let e=this.master=t.createGain();e.gain.value=0;let n=t.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=4,e.connect(n).connect(t.destination);let s=t.sampleRate*2,r=t.createBuffer(1,s,t.sampleRate),a=r.getChannelData(0);for(let y=0;y<s;y++)a[y]=Math.random()*2-1;this.noiseBuffer=r;let o=()=>{let y=t.createBufferSource();return y.buffer=r,y.loop=!0,y.start(),y},l=this.engineGain=t.createGain();l.gain.value=0;let c=this.engineFilter=t.createBiquadFilter();c.type="lowpass",c.Q.value=2.5;let h=t.createWaveShaper(),u=new Float32Array(1024);for(let y=0;y<1024;y++){let b=y/1023*2-1;u[y]=Math.tanh(b*2.4)}h.curve=u,this.oscs=[];for(let[y,b,S]of[["sawtooth",1,.5],["sawtooth",1.007,.35],["square",.5,.3],["sine",.25,.6]]){let w=t.createOscillator();w.type=y;let A=t.createGain();A.gain.value=S,w.connect(A).connect(h),w.start(),this.oscs.push([w,b])}let f=t.createGain();f.gain.value=1,this.rumble=t.createOscillator(),this.rumble.type="triangle";let d=t.createGain();d.gain.value=.35,this.rumble.connect(d).connect(f.gain),this.rumble.start(),h.connect(f).connect(c).connect(l).connect(e),this.turbo=t.createOscillator(),this.turbo.type="sine",this.turboGain=t.createGain(),this.turboGain.gain.value=0,this.turbo.connect(this.turboGain).connect(e),this.turbo.start();let x=t.createBiquadFilter();x.type="bandpass",x.frequency.value=1350,x.Q.value=6,this.screechGain=t.createGain(),this.screechGain.gain.value=0,o().connect(x).connect(this.screechGain).connect(e),this.screechFilter=x;let _=t.createBiquadFilter();_.type="lowpass",_.frequency.value=700,this.windGain=t.createGain(),this.windGain.gain.value=0,o().connect(_).connect(this.windGain).connect(e),this.windFilter=_;let m=t.createBiquadFilter();m.type="lowpass",m.frequency.value=520,this.surfGain=t.createGain(),this.surfGain.gain.value=0,o().connect(m).connect(this.surfGain).connect(e);let p=t.createBiquadFilter();p.type="highpass",p.frequency.value=2500,this.nitroGain=t.createGain(),this.nitroGain.gain.value=0,o().connect(p).connect(this.nitroGain).connect(e)}setEnabled(t){this.enabled=t,t&&this.start(),this.ctx&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.1)}update(t){if(!this.ctx)return;let e=this.ctx.currentTime,{rpm:n,throttle:s,speed:r,slip:a,boosting:o,active:l,shoreDistance:c,time:h}=t,u=l?1:0,f=n/60*4;for(let[p,y]of this.oscs)p.frequency.setTargetAtTime(f*y*.5,e,.03);this.rumble.frequency.setTargetAtTime(f*.125,e,.05),this.engineFilter.frequency.setTargetAtTime(240+n*.16+s*n*.28,e,.05),this.engineGain.gain.setTargetAtTime(u*(.07+s*.09+n/7400*.05),e,.05),this.turbo.frequency.setTargetAtTime(1400+n*.55,e,.1),this.turboGain.gain.setTargetAtTime(u*s*(n/7400)**2*.012,e,.1);let d=u*Math.min(Math.max(a-3,0)/10,1);this.screechGain.gain.setTargetAtTime(d*.09,e,.06),this.screechFilter.frequency.setTargetAtTime(1100+Math.min(a,20)*25,e,.1);let x=Math.abs(r);this.windGain.gain.setTargetAtTime(u*Math.min((x/60)**2,1)*.1,e,.2),this.windFilter.frequency.setTargetAtTime(400+x*18,e,.2);let _=Math.max(0,1-c/140),m=.55+.45*Math.sin(h*.7)*Math.sin(h*.23+1);this.surfGain.gain.setTargetAtTime(_*m*.11,e,.3),this.nitroGain.gain.setTargetAtTime(u*(o?.05:0),e,.05)}burst(t,e,n,s,r=1){if(!this.ctx||!this.enabled)return;let a=this.ctx,o=a.currentTime,l=a.createBufferSource();l.buffer=this.noiseBuffer;let c=a.createBiquadFilter();c.type=e,c.frequency.value=n,c.Q.value=r;let h=a.createGain();h.gain.setValueAtTime(s,o),h.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(c).connect(h).connect(this.master),l.start(o,Math.random()),l.stop(o+t+.05)}impact(t){let e=Math.min(t/20,1);this.burst(.35+e*.3,"lowpass",300+e*900,.25+e*.6),e>.35&&this.burst(.25,"bandpass",3200,.12*e,2)}shift(t){t&&this.burst(.18,"highpass",1800,.08)}horn(t){if(!this.ctx||!this.enabled)return;let e=this.ctx,n=e.currentTime,s=Math.min(.12,6/Math.max(t,6)*.12),r=e.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(s,n+.02),r.gain.setValueAtTime(s,n+.45),r.gain.linearRampToValueAtTime(0,n+.55);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=1800;for(let o of[349,440]){let l=e.createOscillator();l.type="square",l.frequency.value=o,l.connect(a),l.start(n),l.stop(n+.6)}a.connect(r).connect(this.master)}chime(t=!1){if(!this.ctx||!this.enabled)return;let e=this.ctx,n=e.currentTime;(t?[523.25,659.25,783.99,1046.5]:[659.25,987.77]).forEach((r,a)=>{let o=e.createOscillator();o.type="triangle",o.frequency.value=r;let l=e.createGain(),c=n+a*.09;l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(.12,c+.01),l.gain.exponentialRampToValueAtTime(1e-4,c+.6),o.connect(l).connect(this.master),o.start(c),o.stop(c+.65)})}};var fl=class{constructor(){this.keys=new Set,this.state={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},this.padButtons=new Set,this.onPadPress=null}clear(){this.keys.clear()}poll(){let t=this.keys,e=t.has("KeyW")||t.has("ArrowUp")?1:0,n=t.has("KeyS")||t.has("ArrowDown")?1:0,s=(t.has("KeyA")||t.has("ArrowLeft")?1:0)-(t.has("KeyD")||t.has("ArrowRight")?1:0),r=t.has("Space"),a=t.has("ShiftLeft")||t.has("ShiftRight"),o=navigator.getGamepads?navigator.getGamepads():[];for(let l of o){if(!l||!l.connected)continue;let c=l.axes[0]||0;Math.abs(c)>.12&&(s=-Math.sign(c)*((Math.abs(c)-.12)/.88)**1.4);let h=l.buttons[7]?.value||0,u=l.buttons[6]?.value||0;e=Math.max(e,h),n=Math.max(n,u),r=r||!!l.buttons[0]?.pressed,a=a||!!l.buttons[1]?.pressed||!!l.buttons[2]?.pressed;for(let[f,d]of[[3,"camera"],[9,"pause"],[8,"map"],[5,"reset"]]){let x=!!l.buttons[f]?.pressed,_=l.index+":"+f;x&&!this.padButtons.has(_)&&this.onPadPress?.(d),x?this.padButtons.add(_):this.padButtons.delete(_)}}return Object.assign(this.state,{throttle:e,brake:n,steer:s,handbrake:r,nitro:a}),this.state}};var Vt=i=>document.getElementById(i),kx=matchMedia("(pointer:coarse)").matches,Qn={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,t){try{localStorage.setItem(i,t)}catch{}}};function Yu(i){Vt("loading").classList.add("hidden"),Vt("error").classList.remove("hidden"),console.error(i)}async function Vx(){let i;try{if(i=new Wa(Vt("world")),!i.renderer.capabilities.isWebGL2)throw new Error("WebGL 2 unavailable")}catch(g){Yu(g);return}let t=i.renderer,e=new Xi,n=new Ge(55,innerWidth/innerHeight,.1,3200);n.layers.enable(1),i.init(e,n);let s=g=>(Vt("loading-step").textContent=g,new Promise(U=>setTimeout(U,0)));await s("Painting the sky\u2026");let r=new qa(t,e);await s("Paving the boulevards\u2026"),Nu(e,t),await s("Raising the skyline\u2026");let a=Fu(e,t);await s("Rolling in the surf\u2026");let o=Ou(e,t);await s("Planting palms\u2026");let l=Hu(e,t),c=ku(e,t,o.pier.lamps);await s("Fueling up\u2026");let h=new nl(e,t),u=new ol(e,t),f=Wu(e,t),d=new al(e),x=new Pe,_=Or(16761466,.9),m=new ue(1.1,1.1,40,20,1,!0);m.translate(0,20,0);let p=[-1,1].map(g=>{let U=new Ft(m,_);return U.userData.noAO=!0,U.layers.set(1),x.add(U),{mesh:U,side:g}}),y=new Ne({color:new gt(3,1.8,.8),transparent:!0,opacity:.8,depthWrite:!1,blending:gn}),b=new Ft(new pr(Za-.6,Za,72),y);b.rotation.x=-Math.PI/2,b.position.y=.06,b.userData.noAO=!0,x.add(b);let S=new Ft(new Ai(1.6,2.6,3),new Ne({color:new gt(4,2.4,1.1)}));S.rotation.z=Math.PI,S.userData.noAO=!0,x.add(S),x.visible=!1,e.add(x);let w={colliders:a.colliders,circles:l.trunkColliders,piles:(Yt.piles||[]).map(([g,U])=>({x:g,z:U,r:.45}))};Iu(e);let A=new ll(n),R=new cl(a.colliders),D=new ul,M=new fl,v={state:"intro",paused:!1,mode:"free",raceTime:0,checkpoint:0,route:Kn,lastX:pn.x,lastZ:pn.z,time:0,frame:0,flash:0},C=Qn.get("pacific-quality")||(kx?"medium":"high");["ultra","high","medium","low"].includes(C)||(C="high");let L=Qn.get("pacific-time")||"golden";!(L in Ya)&&L!=="cycle"&&(L="golden");function O(g){C=g,Qn.set("pacific-quality",g),i.setQuality(g);let U=i.quality;r.setShadowQuality(U.shadow,U.shadowRange),o.setReflections(U.reflections>0,U.reflections),Vt("quality").value=g}i.onResize=()=>o.resize(i.quality.reflections);function V(g){L=g,Qn.set("pacific-time",g),r.cycle=g==="cycle",g!=="cycle"?r.setHours(Ya[g]):r.envDirty=!0,Vt("time-select").value=g}h.reset(pn.x,pn.z,pn.heading);let F=Qn.get("pacific-color");F&&H(F),O(C),V(L);let N;function X(g){let U=Vt("toast");U.textContent=g,U.classList.add("show"),clearTimeout(N),N=setTimeout(()=>U.classList.remove("show"),2400)}function H(g){h.setColor(g),Qn.set("pacific-color",g),document.querySelectorAll(".swatch").forEach(U=>{let W=U.dataset.color===g;U.classList.toggle("active",W),U.setAttribute("aria-pressed",String(W))})}function Q(){if(v.checkpoint>=Kn.length)return;let[g,U]=Kn[v.checkpoint];x.position.set(g,0,U);let W=Math.abs(g-kn(he,g))<1;for(let $ of p)$.mesh.position.set(W?$.side*(se+1):0,0,W?0:$.side*(se+1));Vt("checkpoint-count").textContent=`${v.checkpoint+1} / ${Kn.length}`}function it(g){v.mode=g,v.state="play",v.paused=!1,M.clear();for(let U of["intro","intro-location","intro-footer"])Vt(U).classList.add("hidden");Vt("hud").classList.remove("hidden"),document.body.classList.add("playing"),document.body.classList.toggle("racing",g==="race"),Vt("race").classList.toggle("hidden",g!=="race"),Vt("start-trial").classList.toggle("hidden",g==="race"),Vt("mode-label").textContent=g==="race"?"TIME TRIAL":"FREE ROAM",Vt("mission-title").textContent=g==="race"?"Follow the afterglow.":"Take the long way home.",Vt("mission-subtitle").textContent=g==="race"?`Pass through all ${Kn.length} golden checkpoints.`:"Explore Vista Pac\xEDfica at your own pace.",v.raceTime=0,v.checkpoint=0,h.reset(pn.x,pn.z,pn.heading),v.lastX=h.x,v.lastZ=h.z,x.visible=g==="race",Q(),A.snap(h),D.setEnabled(rt),X(g==="race"?"SUNSET RUN \xB7 GO":"WELCOME TO VISTA PAC\xCDFICA")}function dt(){v.paused=!0,M.clear(),D.chime(!0),Vt("final-time").textContent=hl(v.raceTime);let g=Number(Qn.get("pacific-best"))||null;!g||v.raceTime<g?(Qn.set("pacific-best",String(v.raceTime)),Vt("best-time").textContent="A new personal best. Make the coast remember it."):Vt("best-time").textContent="PERSONAL BEST  "+hl(g),Vt("result").showModal(),x.visible=!1}function Rt(g=!1){Vt("result").open||(v.paused=!0,M.clear(),Vt("menu-title").textContent=g?"Make it your drive.":"Take a breather.",Vt("menu-description").textContent=g?"Tune the look of the coast to your machine.":"The coast will be right here.",Vt("resume").textContent=v.state==="intro"?"BACK TO THE COAST":"BACK TO THE DRIVE",Vt("back-title").classList.toggle("hidden",v.state==="intro"),Vt("restart-race").textContent=v.mode==="race"&&v.state==="play"?"RESTART SUNSET RUN":"START SUNSET RUN",Vt("menu").open||Vt("menu").showModal())}function tt(){Vt("menu").close(),v.paused=!1,M.clear()}function ct(g){A.mode=g??(A.mode+1)%Wc.length,Vt("camera-select").value=A.mode,v.state==="play"&&(X(Wc[A.mode]),A.snap(h))}function At(){let g=["golden","dusk","night","dawn","noon","cycle"],U=g[(g.indexOf(L)+1)%g.length];V(U),X({golden:"GOLDEN HOUR",dusk:"BLUE HOUR",night:"MIDNIGHT",dawn:"FIRST LIGHT",noon:"HIGH NOON",cycle:"LIVE DAY CYCLE"}[U])}function q(){v.state==="play"&&(R.setExpanded(!R.expanded),document.querySelector(".map-panel").classList.toggle("expanded",R.expanded),Vt("map-button").setAttribute("aria-label",R.expanded?"Close expanded map":"Expand map"))}function j(){v.mode==="race"?(v.raceTime=0,v.checkpoint=0,h.reset(pn.x,pn.z,pn.heading),Q(),X("RUN RESTARTED")):(h.safeRespawn(),X("BACK ON THE ROAD")),v.lastX=h.x,v.lastZ=h.z,A.snap(h)}function ot(){tt(),v.state="intro",x.visible=!1,document.body.classList.remove("playing","racing"),Vt("hud").classList.add("hidden"),R.expanded&&Et(!1);for(let g of["intro","intro-location","intro-footer"])Vt(g).classList.remove("hidden");h.reset(pn.x,pn.z,pn.heading)}function Et(g){R.setExpanded(g),document.querySelector(".map-panel").classList.toggle("expanded",g)}let rt=Qn.get("pacific-sound")!=="off";function Pt(){Vt("sound").setAttribute("aria-label",rt?"Mute sound":"Enable sound"),Vt("sound").querySelector("span").style.display=rt?"none":"block"}Pt(),Vt("drive").onclick=()=>it("free"),Vt("trial").onclick=()=>it("race"),Vt("start-trial").onclick=()=>it("race"),Vt("pause").onclick=()=>Rt(),Vt("settings").onclick=()=>Rt(!0),Vt("close-menu").onclick=tt,Vt("resume").onclick=tt,Vt("restart-race").onclick=()=>{tt(),it("race")},Vt("back-title").onclick=ot,Vt("menu").addEventListener("cancel",g=>{g.preventDefault(),tt()}),Vt("result").addEventListener("cancel",g=>g.preventDefault()),Vt("race-again").onclick=()=>{Vt("result").close(),it("race")},Vt("free-roam").onclick=()=>{Vt("result").close(),it("free")},Vt("quality").onchange=g=>O(g.target.value),Vt("time-select").onchange=g=>V(g.target.value),Vt("camera-select").onchange=g=>ct(Number(g.target.value)),Vt("sound").onclick=()=>{rt=!rt,Qn.set("pacific-sound",rt?"on":"off"),D.setEnabled(rt&&v.state==="play"),rt&&D.start(),Pt(),X(rt?"SOUND ON":"SOUND OFF")},Vt("map-button").onclick=q;for(let g of document.querySelectorAll(".swatch"))g.onclick=()=>H(g.dataset.color);let Jt=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);addEventListener("keydown",g=>{if(g.target.tagName!=="SELECT"&&(Jt.has(g.code)&&g.preventDefault(),!g.repeat)){if(g.code==="Escape"){g.preventDefault(),Vt("menu").open?tt():v.state==="play"&&Rt();return}if(g.code==="Enter"&&v.state==="intro"&&!v.paused){it("free");return}if(g.code==="KeyT"&&!v.paused){At();return}if(!(v.state!=="play"||v.paused)){if(g.code==="KeyP")return Rt();if(g.code==="KeyR")return j();if(g.code==="KeyC")return ct();if(g.code==="KeyM")return q();if(g.code==="KeyH"){D.horn(3);return}M.keys.add(g.code)}}}),addEventListener("keyup",g=>M.keys.delete(g.code)),addEventListener("blur",()=>{M.clear(),v.state==="play"&&!v.paused&&Rt()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(M.clear(),v.state==="play"&&!v.paused&&Rt())}),M.onPadPress=g=>{if(g==="pause")return v.paused?tt():v.state==="play"?Rt():it("free");v.state!=="play"||v.paused||(g==="camera"&&ct(),g==="map"&&q(),g==="reset"&&j())};for(let g of document.querySelectorAll("[data-key]")){let U=()=>{M.keys.delete(g.dataset.key),g.classList.remove("pressed")};g.addEventListener("pointerdown",W=>{W.preventDefault(),!v.paused&&(g.setPointerCapture(W.pointerId),M.keys.add(g.dataset.key),g.classList.add("pressed"))}),g.addEventListener("pointerup",U),g.addEventListener("pointercancel",U),g.addEventListener("lostpointercapture",U)}addEventListener("resize",()=>i.applySize());let P=new I,Xt=new I,It=0,xt=[new I(-.42,.32,2.36),new I(.42,.32,2.36)];function vt(g,U,W,$,Y,yt,nt){let St=0,mt=2e3;for(let[lt,bt,kt,Ot]of[[g,$,nt.x-nt.w/2,nt.x+nt.w/2],[U,Y,0,nt.h],[W,yt,nt.z-nt.d/2,nt.z+nt.d/2]]){if(Math.abs(bt)<1e-6){if(lt<kt||lt>Ot)return!1;continue}let Mt=(kt-lt)/bt,Zt=(Ot-lt)/bt;if(Mt>Zt&&([Mt,Zt]=[Zt,Mt]),St=Math.max(St,Mt),mt=Math.min(mt,Zt),St>mt)return!1}return!0}function et(){let g=r.sunDir;if(r.elevation<-.5)return 0;let U=n.position;for(let $ of a.buildingTops)if(vt(U.x,U.y,U.z,g.x,g.y,g.z,$))return 0;for(let $=60;$<1600;$*=1.35)if(U.y+g.y*$<Gn(U.x+g.x*$,U.z+g.z*$))return 0;if(Xt.copy(U).addScaledVector(g,1e3).project(n),Xt.z>1)return 0;let W=Math.max(Math.abs(Xt.x),Math.abs(Xt.y));return nn.clamp(1.25-W,0,1)*nn.smoothstep(r.elevation,-.5,4)}function B(g){let U=Math.abs(h.speed)>3,W=h.slip>3.2&&U||h.wheelspin>.3,$=h.surface==="sand"&&h.y<.5;h.group.updateMatrixWorld();let Y=new gt().copy(r.hemi.color).multiplyScalar(r.hemi.intensity*.55).add(new gt().copy(r.sun.color).multiplyScalar(r.elevation>0?r.sun.intensity*.22:0));if(f.smoke.uniforms.light.value.copy(Y),f.dust.uniforms.light.value.copy(Y),h.wheels.forEach((yt,nt)=>{if(yt.front)return;P.set(yt.x,.05,yt.z).applyMatrix4(h.group.matrixWorld),d.add(nt,P.x,h.y,P.z,!$&&(W||h.brake>0&&h.speed>14&&h.handbrake),.24);let St=Math.min(1,(h.slip-3)/9)+h.wheelspin;!$&&W&&Dt()<St*60*g&&f.smoke.emit(P.x,P.y+.3,P.z,h.vx*.15+(Dt()-.5)*1.5,.6+Dt(),h.vz*.15+(Dt()-.5)*1.5,1.2+Dt()*.8,2.2+Dt()*1.2,.5*Math.min(1,St+.3),.85,.85,.86),$&&U&&Dt()<Math.min(1,Math.abs(h.speed)/25)*40*g&&f.dust.emit(P.x,P.y+.2,P.z,(Dt()-.5)*2,.8+Dt(),(Dt()-.5)*2,.9+Dt()*.6,1.4+Dt(),.55,.78,.68,.52)}),h.boosting)for(let yt of xt){P.copy(yt).applyMatrix4(h.group.matrixWorld);let nt=new I(Math.sin(h.heading),0,Math.cos(h.heading));for(let St=0;St<2;St++){let mt=Dt();f.flames.emit(P.x,P.y,P.z,h.vx+nt.x*(6+Dt()*4),Dt()*.4,h.vz+nt.z*(6+Dt()*4),.35+Dt()*.25,.12+Dt()*.08,1,1.4+mt,.8+mt*1.4,2.8)}}if(h.impact>4){let yt=new I(-Math.sin(h.heading),0,-Math.cos(h.heading)),nt=Math.min(40,Math.floor(h.impact*2));for(let St=0;St<nt;St++)f.sparks.emit(h.x+yt.x*2,h.y+.5,h.z+yt.z*2,(Dt()-.5)*9,Dt()*5,(Dt()-.5)*9,.12+Dt()*.1,.4+Dt()*.5,1,6,3.2,1);D.impact(h.impact),A.shake=Math.min(.5,h.impact*.03)}}function Z(g){if(v.mode!=="race"||v.checkpoint>=Kn.length)return;v.raceTime+=g;let[U,W]=Kn[v.checkpoint],$=v.lastX,Y=v.lastZ,yt=h.x-$,nt=h.z-Y,St=yt*yt+nt*nt,mt=St?nn.clamp(((U-$)*yt+(W-Y)*nt)/St,0,1):0;Math.hypot(U-$-yt*mt,W-Y-nt*mt)<Za&&(v.checkpoint++,v.checkpoint===Kn.length?dt():(Q(),D.chime(),X(`CHECKPOINT ${v.checkpoint} / ${Kn.length}`),v.flash=1))}function at(g,U){if(u.update(g,v.time,h,$=>D.horn(Math.hypot($.x-h.x,$.z-h.z))),v.state!=="play")return;let W=Math.ceil(g/(1/120));for(let $=0;$<W&&(v.lastX=h.x,v.lastZ=h.z,h.update(g/W,U,w),Z(g/W),!v.paused);$++);}let wt=new Ji;t.info.autoReset=!1;function T(){requestAnimationFrame(T),t.info.reset();let g=wt.getDelta(),U=Math.min(g,.05);v.time+=U,v.frame++;let W=M.poll();v.paused||(at(U,W),v.state==="play"?(B(U),A.update(h,U)):A.orbit(h,v.time)),h.setLights(r.lampFactor,h.brake>0&&h.speed>.5,h.gear<0);let $=P.set(h.x-Math.sin(h.heading)*i.quality.shadowRange*.35,0,h.z-Math.cos(h.heading)*i.quality.shadowRange*.35);r.update(U,v.time,$,n),Nc.value.copy(r.sun.color).multiplyScalar(r.elevation>-1?r.sun.intensity:.1),a.update(r.lampFactor,v.time),c.update(v.time,r.lampFactor),o.update(v.time,r),u.sync(r.lampFactor,h);for(let nt of Object.values(f))nt.update(v.paused?0:U);x.visible&&(S.position.y=12+Math.sin(v.time*2)*.6,S.rotation.y=v.time*.8,_.uniforms.intensity.value=.55+Math.sin(v.time*3)*.12,y.opacity=.65+Math.sin(v.time*3)*.15),t.toneMappingExposure=r.exposure;let Y=i.grade.uniforms;Y.time.value=v.time,It=nn.damp(It,et(),10,U),Y.sunVisible.value=i.quality.grade?It*.8:0,Y.sunPos.value.set(Xt.x*.5+.5,Xt.y*.5+.5),Y.sunColor.value.copy(ke.fogSunColor.value);let yt=nn.clamp((Math.abs(h.speed)-30)/35,0,1);Y.speedBlur.value=v.state==="play"&&i.quality.grade?yt*.6+(h.boosting?.45:0):0,v.flash=Math.max(0,v.flash-U*3),Y.flash.value=v.flash,Y.night.value=r.nightFactor,i.bloom&&(i.bloom.strength=.36+r.lampFactor*.22),i.render(),v.state==="play"&&v.frame%2===0&&R.update(h,v,u,r),v.frame%30===0&&(Vt("world-clock").textContent=r.clockLabel),D.update({rpm:h.rpm,throttle:h.throttle,speed:h.speed,slip:h.slip+h.wheelspin*12,boosting:h.boosting,active:v.state==="play"&&!v.paused,shoreDistance:Math.abs(n.position.x-An),time:v.time}),v.state==="play"&&!v.paused&&i.adapt(g)}h.onShift=g=>D.shift(g>0),await s("Warming up the engine\u2026"),A.orbit(h,0),r.update(0,0,P.set(h.x,0,h.z),n);try{await t.compileAsync(e,n)}catch{}T(),requestAnimationFrame(()=>Vt("loading").classList.add("hidden")),window.__pacific={getState:()=>({state:v.state,mode:v.mode,paused:v.paused,speed:h.speed,heading:h.heading,nitro:h.nitro,position:{x:h.x,z:h.z,y:h.y},checkpoint:v.checkpoint,raceTime:v.raceTime,quality:C,time:r.hours,gear:h.gear,rpm:h.rpm,distanceTravelled:h.distance,renderScale:i.scale,drawCalls:t.info.render.calls,triangles:t.info.render.triangles}),setTime:g=>{r.cycle=!1,r.setHours(g)},setQuality:O,teleport:(g,U,W=0)=>{h.reset(g,U,W),A.snap(h)},step:(g,U={})=>{let W={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1,...U};for(let $=0;$<g&&!v.paused;$+=1/60)v.time+=1/60,at(1/60,W);return A.snap(h),window.__pacific.getState()},traffic:()=>u.cars.map(g=>({x:+g.x.toFixed(1),z:+g.z.toFixed(1),speed:+g.speed.toFixed(1),axis:g.axis,turn:!!g.turn,hit:!!g.hit})),reset:j,camera:ct,debug:{scene:e,atmosphere:r,pipeline:i,renderer:t,camera:n,rig:A}}}Vx().catch(Yu);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
