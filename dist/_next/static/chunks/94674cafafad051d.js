(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,13035,e=>{"use strict";var t=e.i(31067),n=e.i(71645);function i(e,i){let r=e+"Geometry";return n.forwardRef(({args:e,children:o,...a},s)=>{let l=n.useRef(null);return n.useImperativeHandle(s,()=>l.current),n.useLayoutEffect(()=>void(null==i||i(l.current))),n.createElement("mesh",(0,t.default)({ref:l},a),n.createElement(r,{attach:"geometry",args:e}),o)})}e.i(90072);let r=i("cylinder"),o=i("sphere"),a=i("torus"),s=i("ring");e.s(["Cylinder",()=>r,"Ring",()=>s,"Sphere",()=>o,"Torus",()=>a])},30297,e=>{"use strict";var t=e.i(31067),n=e.i(15080),i=e.i(71753),r=e.i(71645),o=e.i(90072),a=Object.defineProperty;class s{constructor(){((e,t,n)=>{let i,r;r=void 0,(i="symbol"!=typeof t?t+"":t)in e?a(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r})(this,"_listeners")}addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let n=this._listeners;void 0===n[e]&&(n[e]=[]),-1===n[e].indexOf(t)&&n[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let n=this._listeners;return void 0!==n[e]&&-1!==n[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let n=this._listeners[e];if(void 0!==n){let e=n.indexOf(t);-1!==e&&n.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let n=t.slice(0);for(let t=0,i=n.length;t<i;t++)n[t].call(this,e);e.target=null}}}var l=Object.defineProperty,c=(e,t,n)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?l(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n,n};let d=new o.Ray,u=new o.Plane,f=Math.cos(Math.PI/180*70),p=(e,t)=>(e%t+t)%t;class h extends s{constructor(e,t){super(),c(this,"object"),c(this,"domElement"),c(this,"enabled",!0),c(this,"target",new o.Vector3),c(this,"minDistance",0),c(this,"maxDistance",1/0),c(this,"minZoom",0),c(this,"maxZoom",1/0),c(this,"minPolarAngle",0),c(this,"maxPolarAngle",Math.PI),c(this,"minAzimuthAngle",-1/0),c(this,"maxAzimuthAngle",1/0),c(this,"enableDamping",!1),c(this,"dampingFactor",.05),c(this,"enableZoom",!0),c(this,"zoomSpeed",1),c(this,"enableRotate",!0),c(this,"rotateSpeed",1),c(this,"enablePan",!0),c(this,"panSpeed",1),c(this,"screenSpacePanning",!0),c(this,"keyPanSpeed",7),c(this,"zoomToCursor",!1),c(this,"autoRotate",!1),c(this,"autoRotateSpeed",2),c(this,"reverseOrbit",!1),c(this,"reverseHorizontalOrbit",!1),c(this,"reverseVerticalOrbit",!1),c(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),c(this,"mouseButtons",{LEFT:o.MOUSE.ROTATE,MIDDLE:o.MOUSE.DOLLY,RIGHT:o.MOUSE.PAN}),c(this,"touches",{ONE:o.TOUCH.ROTATE,TWO:o.TOUCH.DOLLY_PAN}),c(this,"target0"),c(this,"position0"),c(this,"zoom0"),c(this,"_domElementKeyEvents",null),c(this,"getPolarAngle"),c(this,"getAzimuthalAngle"),c(this,"setPolarAngle"),c(this,"setAzimuthalAngle"),c(this,"getDistance"),c(this,"getZoomScale"),c(this,"listenToKeyEvents"),c(this,"stopListenToKeyEvents"),c(this,"saveState"),c(this,"reset"),c(this,"update"),c(this,"connect"),c(this,"dispose"),c(this,"dollyIn"),c(this,"dollyOut"),c(this,"getScale"),c(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>m.phi,this.getAzimuthalAngle=()=>m.theta,this.setPolarAngle=e=>{let t=p(e,2*Math.PI),i=m.phi;i<0&&(i+=2*Math.PI),t<0&&(t+=2*Math.PI);let r=Math.abs(t-i);2*Math.PI-r<r&&(t<i?t+=2*Math.PI:i+=2*Math.PI),v.phi=t-i,n.update()},this.setAzimuthalAngle=e=>{let t=p(e,2*Math.PI),i=m.theta;i<0&&(i+=2*Math.PI),t<0&&(t+=2*Math.PI);let r=Math.abs(t-i);2*Math.PI-r<r&&(t<i?t+=2*Math.PI:i+=2*Math.PI),v.theta=t-i,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ee),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),l=s.NONE},this.update=(()=>{let t=new o.Vector3,r=new o.Vector3(0,1,0),a=new o.Quaternion().setFromUnitVectors(e.up,r),c=a.clone().invert(),p=new o.Vector3,g=new o.Quaternion,x=2*Math.PI;return function(){let E=n.object.position;a.setFromUnitVectors(e.up,r),c.copy(a).invert(),t.copy(E).sub(n.target),t.applyQuaternion(a),m.setFromVector3(t),n.autoRotate&&l===s.NONE&&U(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(m.theta+=v.theta*n.dampingFactor,m.phi+=v.phi*n.dampingFactor):(m.theta+=v.theta,m.phi+=v.phi);let w=n.minAzimuthAngle,S=n.maxAzimuthAngle;isFinite(w)&&isFinite(S)&&(w<-Math.PI?w+=x:w>Math.PI&&(w-=x),S<-Math.PI?S+=x:S>Math.PI&&(S-=x),w<=S?m.theta=Math.max(w,Math.min(S,m.theta)):m.theta=m.theta>(w+S)/2?Math.max(w,m.theta):Math.min(S,m.theta)),m.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,m.phi)),m.makeSafe(),!0===n.enableDamping?n.target.addScaledVector(b,n.dampingFactor):n.target.add(b),n.zoomToCursor&&j||n.object.isOrthographicCamera?m.radius=B(m.radius):m.radius=B(m.radius*y),t.setFromSpherical(m),t.applyQuaternion(c),E.copy(n.target).add(t),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),!0===n.enableDamping?(v.theta*=1-n.dampingFactor,v.phi*=1-n.dampingFactor,b.multiplyScalar(1-n.dampingFactor)):(v.set(0,0,0),b.set(0,0,0));let O=!1;if(n.zoomToCursor&&j){let i=null;if(n.object instanceof o.PerspectiveCamera&&n.object.isPerspectiveCamera){let e=t.length();i=B(e*y);let r=e-i;n.object.position.addScaledVector(L,r),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let e=new o.Vector3(T.x,T.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix(),O=!0;let r=new o.Vector3(T.x,T.y,0);r.unproject(n.object),n.object.position.sub(r).add(e),n.object.updateMatrixWorld(),i=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;null!==i&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(i).add(n.object.position):(d.origin.copy(n.object.position),d.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(d.direction))<f?e.lookAt(n.target):(u.setFromNormalAndCoplanarPoint(n.object.up,n.target),d.intersectPlane(u,n.target))))}else n.object instanceof o.OrthographicCamera&&n.object.isOrthographicCamera&&(O=1!==y)&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix());return y=1,j=!1,!!(O||p.distanceToSquared(n.object.position)>h||8*(1-g.dot(n.object.quaternion))>h)&&(n.dispatchEvent(i),p.copy(n.object.position),g.copy(n.object.quaternion),O=!1,!0)}})(),this.connect=e=>{n.domElement=e,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",et),n.domElement.addEventListener("pointerdown",K),n.domElement.addEventListener("pointercancel",Q),n.domElement.addEventListener("wheel",J)},this.dispose=()=>{var e,t,i,r,o,a;n.domElement&&(n.domElement.style.touchAction="auto"),null==(e=n.domElement)||e.removeEventListener("contextmenu",et),null==(t=n.domElement)||t.removeEventListener("pointerdown",K),null==(i=n.domElement)||i.removeEventListener("pointercancel",Q),null==(r=n.domElement)||r.removeEventListener("wheel",J),null==(o=n.domElement)||o.ownerDocument.removeEventListener("pointermove",q),null==(a=n.domElement)||a.ownerDocument.removeEventListener("pointerup",Q),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",ee)};const n=this,i={type:"change"},r={type:"start"},a={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=s.NONE;const h=1e-6,m=new o.Spherical,v=new o.Spherical;let y=1;const b=new o.Vector3,g=new o.Vector2,x=new o.Vector2,E=new o.Vector2,w=new o.Vector2,S=new o.Vector2,O=new o.Vector2,A=new o.Vector2,M=new o.Vector2,P=new o.Vector2,L=new o.Vector3,T=new o.Vector2;let j=!1;const _=[],C={};function z(){return Math.pow(.95,n.zoomSpeed)}function U(e){n.reverseOrbit||n.reverseHorizontalOrbit?v.theta+=e:v.theta-=e}function R(e){n.reverseOrbit||n.reverseVerticalOrbit?v.phi+=e:v.phi-=e}const I=(()=>{let e=new o.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),b.add(e)}})(),D=(()=>{let e=new o.Vector3;return function(t,i){!0===n.screenSpacePanning?e.setFromMatrixColumn(i,1):(e.setFromMatrixColumn(i,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),b.add(e)}})(),N=(()=>{let e=new o.Vector3;return function(t,i){let r=n.domElement;if(r&&n.object instanceof o.PerspectiveCamera&&n.object.isPerspectiveCamera){let o=n.object.position;e.copy(o).sub(n.target);let a=e.length();I(2*t*(a*=Math.tan(n.object.fov/2*Math.PI/180))/r.clientHeight,n.object.matrix),D(2*i*a/r.clientHeight,n.object.matrix)}else r&&n.object instanceof o.OrthographicCamera&&n.object.isOrthographicCamera?(I(t*(n.object.right-n.object.left)/n.object.zoom/r.clientWidth,n.object.matrix),D(i*(n.object.top-n.object.bottom)/n.object.zoom/r.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function V(e){n.object instanceof o.PerspectiveCamera&&n.object.isPerspectiveCamera||n.object instanceof o.OrthographicCamera&&n.object.isOrthographicCamera?y=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(e){if(!n.zoomToCursor||!n.domElement)return;j=!0;let t=n.domElement.getBoundingClientRect(),i=e.clientX-t.left,r=e.clientY-t.top,o=t.width,a=t.height;T.x=i/o*2-1,T.y=-(r/a*2)+1,L.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function B(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function F(e){g.set(e.clientX,e.clientY)}function k(e){w.set(e.clientX,e.clientY)}function W(){if(1==_.length)g.set(_[0].pageX,_[0].pageY);else{let e=.5*(_[0].pageX+_[1].pageX),t=.5*(_[0].pageY+_[1].pageY);g.set(e,t)}}function Y(){if(1==_.length)w.set(_[0].pageX,_[0].pageY);else{let e=.5*(_[0].pageX+_[1].pageX),t=.5*(_[0].pageY+_[1].pageY);w.set(e,t)}}function G(){let e=_[0].pageX-_[1].pageX,t=_[0].pageY-_[1].pageY,n=Math.sqrt(e*e+t*t);A.set(0,n)}function X(e){if(1==_.length)x.set(e.pageX,e.pageY);else{let t=ei(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);x.set(n,i)}E.subVectors(x,g).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(U(2*Math.PI*E.x/t.clientHeight),R(2*Math.PI*E.y/t.clientHeight)),g.copy(x)}function Z(e){if(1==_.length)S.set(e.pageX,e.pageY);else{let t=ei(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);S.set(n,i)}O.subVectors(S,w).multiplyScalar(n.panSpeed),N(O.x,O.y),w.copy(S)}function $(e){var t;let i=ei(e),r=e.pageX-i.x,o=e.pageY-i.y,a=Math.sqrt(r*r+o*o);M.set(0,a),P.set(0,Math.pow(M.y/A.y,n.zoomSpeed)),t=P.y,V(y/t),A.copy(M)}function K(e){var t,i,a;!1!==n.enabled&&(0===_.length&&(null==(t=n.domElement)||t.ownerDocument.addEventListener("pointermove",q),null==(i=n.domElement)||i.ownerDocument.addEventListener("pointerup",Q)),a=e,_.push(a),"touch"===e.pointerType?function(e){switch(en(e),_.length){case 1:switch(n.touches.ONE){case o.TOUCH.ROTATE:if(!1===n.enableRotate)return;W(),l=s.TOUCH_ROTATE;break;case o.TOUCH.PAN:if(!1===n.enablePan)return;Y(),l=s.TOUCH_PAN;break;default:l=s.NONE}break;case 2:switch(n.touches.TWO){case o.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&G(),n.enablePan&&Y(),l=s.TOUCH_DOLLY_PAN;break;case o.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&G(),n.enableRotate&&W(),l=s.TOUCH_DOLLY_ROTATE;break;default:l=s.NONE}break;default:l=s.NONE}l!==s.NONE&&n.dispatchEvent(r)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.MOUSE.DOLLY:if(!1===n.enableZoom)return;H(e),A.set(e.clientX,e.clientY),l=s.DOLLY;break;case o.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;k(e),l=s.PAN}else{if(!1===n.enableRotate)return;F(e),l=s.ROTATE}break;case o.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;F(e),l=s.ROTATE}else{if(!1===n.enablePan)return;k(e),l=s.PAN}break;default:l=s.NONE}l!==s.NONE&&n.dispatchEvent(r)}(e))}function q(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(en(e),l){case s.TOUCH_ROTATE:if(!1===n.enableRotate)return;X(e),n.update();break;case s.TOUCH_PAN:if(!1===n.enablePan)return;Z(e),n.update();break;case s.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&$(e),n.enablePan&&Z(e),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&$(e),n.enableRotate&&X(e),n.update();break;default:l=s.NONE}}(e):function(e){if(!1!==n.enabled)switch(l){case s.ROTATE:let t;if(!1===n.enableRotate)return;x.set(e.clientX,e.clientY),E.subVectors(x,g).multiplyScalar(n.rotateSpeed),(t=n.domElement)&&(U(2*Math.PI*E.x/t.clientHeight),R(2*Math.PI*E.y/t.clientHeight)),g.copy(x),n.update();break;case s.DOLLY:var i,r;if(!1===n.enableZoom)return;(M.set(e.clientX,e.clientY),P.subVectors(M,A),P.y>0)?(i=z(),V(y/i)):P.y<0&&(r=z(),V(y*r)),A.copy(M),n.update();break;case s.PAN:if(!1===n.enablePan)return;S.set(e.clientX,e.clientY),O.subVectors(S,w).multiplyScalar(n.panSpeed),N(O.x,O.y),w.copy(S),n.update()}}(e))}function Q(e){var t,i,r;(function(e){delete C[e.pointerId];for(let t=0;t<_.length;t++)if(_[t].pointerId==e.pointerId)return void _.splice(t,1)})(e),0===_.length&&(null==(t=n.domElement)||t.releasePointerCapture(e.pointerId),null==(i=n.domElement)||i.ownerDocument.removeEventListener("pointermove",q),null==(r=n.domElement)||r.ownerDocument.removeEventListener("pointerup",Q)),n.dispatchEvent(a),l=s.NONE}function J(e){if(!1!==n.enabled&&!1!==n.enableZoom&&(l===s.NONE||l===s.ROTATE)){var t,i;e.preventDefault(),n.dispatchEvent(r),(H(e),e.deltaY<0)?(t=z(),V(y*t)):e.deltaY>0&&(i=z(),V(y/i)),n.update(),n.dispatchEvent(a)}}function ee(e){if(!1!==n.enabled&&!1!==n.enablePan){let t=!1;switch(e.code){case n.keys.UP:N(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:N(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:N(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:N(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}}function et(e){!1!==n.enabled&&e.preventDefault()}function en(e){let t=C[e.pointerId];void 0===t&&(t=new o.Vector2,C[e.pointerId]=t),t.set(e.pageX,e.pageY)}function ei(e){return C[(e.pointerId===_[0].pointerId?_[1]:_[0]).pointerId]}this.dollyIn=(e=z())=>{V(y*e),n.update()},this.dollyOut=(e=z())=>{V(y/e),n.update()},this.getScale=()=>y,this.setScale=e=>{V(e),n.update()},this.getZoomScale=()=>z(),void 0!==t&&this.connect(t),this.update()}}let m=r.forwardRef(({makeDefault:e,camera:o,regress:a,domElement:s,enableDamping:l=!0,keyEvents:c=!1,onChange:d,onStart:u,onEnd:f,...p},m)=>{let v=(0,n.useThree)(e=>e.invalidate),y=(0,n.useThree)(e=>e.camera),b=(0,n.useThree)(e=>e.gl),g=(0,n.useThree)(e=>e.events),x=(0,n.useThree)(e=>e.setEvents),E=(0,n.useThree)(e=>e.set),w=(0,n.useThree)(e=>e.get),S=(0,n.useThree)(e=>e.performance),O=o||y,A=s||g.connected||b.domElement,M=r.useMemo(()=>new h(O),[O]);return(0,i.useFrame)(()=>{M.enabled&&M.update()},-1),r.useEffect(()=>(c&&M.connect(!0===c?A:c),M.connect(A),()=>void M.dispose()),[c,A,a,M,v]),r.useEffect(()=>{let e=e=>{v(),a&&S.regress(),d&&d(e)},t=e=>{u&&u(e)},n=e=>{f&&f(e)};return M.addEventListener("change",e),M.addEventListener("start",t),M.addEventListener("end",n),()=>{M.removeEventListener("start",t),M.removeEventListener("end",n),M.removeEventListener("change",e)}},[d,u,f,M,v,x]),r.useEffect(()=>{if(e){let e=w().controls;return E({controls:M}),()=>E({controls:e})}},[e,M]),r.createElement("primitive",(0,t.default)({ref:m,object:M,enableDamping:l},p))});e.s(["OrbitControls",()=>m],30297)},60099,e=>{"use strict";let t,n;var i=e.i(31067),r=e.i(71645),o=e.i(88014),a=e.i(90072),s=e.i(15080),l=e.i(71753);let c=new a.Vector3,d=new a.Vector3,u=new a.Vector3,f=new a.Vector2;function p(e,t,n){let i=c.setFromMatrixPosition(e.matrixWorld);i.project(t);let r=n.width/2,o=n.height/2;return[i.x*r+r,-(i.y*o)+o]}let h=e=>1e-10>Math.abs(e)?0:e;function m(e,t,n=""){let i="matrix3d(";for(let n=0;16!==n;n++)i+=h(t[n]*e.elements[n])+(15!==n?",":")");return n+i}let v=(t=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>m(e,t)),y=(n=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>m(e,n(t),"translate(-50%,-50%)")),b=r.forwardRef(({children:e,eps:t=.001,style:n,className:m,prepend:b,center:g,fullscreen:x,portal:E,distanceFactor:w,sprite:S=!1,transform:O=!1,occlude:A,onOcclude:M,castShadow:P,receiveShadow:L,material:T,geometry:j,zIndexRange:_=[0x1000037,0],calculatePosition:C=p,as:z="div",wrapperClass:U,pointerEvents:R="auto",...I},D)=>{let{gl:N,camera:V,scene:H,size:B,raycaster:F,events:k,viewport:W}=(0,s.useThree)(),[Y]=r.useState(()=>document.createElement(z)),G=r.useRef(null),X=r.useRef(null),Z=r.useRef(0),$=r.useRef([0,0]),K=r.useRef(null),q=r.useRef(null),Q=(null==E?void 0:E.current)||k.connected||N.domElement.parentNode,J=r.useRef(null),ee=r.useRef(!1),et=r.useMemo(()=>{var e;return A&&"blending"!==A||Array.isArray(A)&&A.length&&(e=A[0])&&"object"==typeof e&&"current"in e},[A]);r.useLayoutEffect(()=>{let e=N.domElement;A&&"blending"===A?(e.style.zIndex=`${Math.floor(_[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[A]),r.useLayoutEffect(()=>{if(X.current){let e=G.current=o.createRoot(Y);if(H.updateMatrixWorld(),O)Y.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=C(X.current,V,B);Y.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return Q&&(b?Q.prepend(Y):Q.appendChild(Y)),()=>{Q&&Q.removeChild(Y),e.unmount()}}},[Q,O]),r.useLayoutEffect(()=>{U&&(Y.className=U)},[U]);let en=r.useMemo(()=>O?{position:"absolute",top:0,left:0,width:B.width,height:B.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:g?"translate3d(-50%,-50%,0)":"none",...x&&{top:-B.height/2,left:-B.width/2,width:B.width,height:B.height},...n},[n,g,x,B,O]),ei=r.useMemo(()=>({position:"absolute",pointerEvents:R}),[R]);r.useLayoutEffect(()=>{var t,i;ee.current=!1,O?null==(t=G.current)||t.render(r.createElement("div",{ref:K,style:en},r.createElement("div",{ref:q,style:ei},r.createElement("div",{ref:D,className:m,style:n,children:e})))):null==(i=G.current)||i.render(r.createElement("div",{ref:D,style:en,className:m,children:e}))});let er=r.useRef(!0);(0,l.useFrame)(e=>{if(X.current){V.updateMatrixWorld(),X.current.updateWorldMatrix(!0,!1);let e=O?$.current:C(X.current,V,B);if(O||Math.abs(Z.current-V.zoom)>t||Math.abs($.current[0]-e[0])>t||Math.abs($.current[1]-e[1])>t){var n;let t,i,r,o,s=(n=X.current,t=c.setFromMatrixPosition(n.matrixWorld),i=d.setFromMatrixPosition(V.matrixWorld),r=t.sub(i),o=V.getWorldDirection(u),r.angleTo(o)>Math.PI/2),l=!1;et&&(Array.isArray(A)?l=A.map(e=>e.current):"blending"!==A&&(l=[H]));let p=er.current;l?er.current=function(e,t,n,i){let r=c.setFromMatrixPosition(e.matrixWorld),o=r.clone();o.project(t),f.set(o.x,o.y),n.setFromCamera(f,t);let a=n.intersectObjects(i,!0);if(a.length){let e=a[0].distance;return r.distanceTo(n.ray.origin)<e}return!0}(X.current,V,F,l)&&!s:er.current=!s,p!==er.current&&(M?M(!er.current):Y.style.display=er.current?"block":"none");let m=Math.floor(_[0]/2),b=A?et?[_[0],m]:[m-1,0]:_;if(Y.style.zIndex=`${function(e,t,n){if(t instanceof a.PerspectiveCamera||t instanceof a.OrthographicCamera){let i=c.setFromMatrixPosition(e.matrixWorld),r=d.setFromMatrixPosition(t.matrixWorld),o=i.distanceTo(r),a=(n[1]-n[0])/(t.far-t.near),s=n[1]-a*t.far;return Math.round(a*o+s)}}(X.current,V,b)}`,O){let[e,t]=[B.width/2,B.height/2],n=V.projectionMatrix.elements[5]*t,{isOrthographicCamera:i,top:r,left:o,bottom:a,right:s}=V,l=v(V.matrixWorldInverse),c=i?`scale(${n})translate(${h(-(s+o)/2)}px,${h((r+a)/2)}px)`:`translateZ(${n}px)`,d=X.current.matrixWorld;S&&((d=V.matrixWorldInverse.clone().transpose().copyPosition(d).scale(X.current.scale)).elements[3]=d.elements[7]=d.elements[11]=0,d.elements[15]=1),Y.style.width=B.width+"px",Y.style.height=B.height+"px",Y.style.perspective=i?"":`${n}px`,K.current&&q.current&&(K.current.style.transform=`${c}${l}translate(${e}px,${t}px)`,q.current.style.transform=y(d,1/((w||10)/400)))}else{let t=void 0===w?1:function(e,t){if(t instanceof a.OrthographicCamera)return t.zoom;if(!(t instanceof a.PerspectiveCamera))return 1;{let n=c.setFromMatrixPosition(e.matrixWorld),i=d.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*n.distanceTo(i))}}(X.current,V)*w;Y.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}$.current=e,Z.current=V.zoom}}if(!et&&J.current&&!ee.current)if(O){if(K.current){let e=K.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=V;if(t||j)I.scale&&(Array.isArray(I.scale)?I.scale instanceof a.Vector3?J.current.scale.copy(I.scale.clone().divideScalar(1)):J.current.scale.set(1/I.scale[0],1/I.scale[1],1/I.scale[2]):J.current.scale.setScalar(1/I.scale));else{let t=(w||10)/400,n=e.clientWidth*t,i=e.clientHeight*t;J.current.scale.set(n,i,1)}ee.current=!0}}}else{let t=Y.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/W.factor,n=t.clientWidth*e,i=t.clientHeight*e;J.current.scale.set(n,i,1),ee.current=!0}J.current.lookAt(e.camera.position)}});let eo=r.useMemo(()=>({vertexShader:O?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[O]);return r.createElement("group",(0,i.default)({},I,{ref:X}),A&&!et&&r.createElement("mesh",{castShadow:P,receiveShadow:L,ref:J},j||r.createElement("planeGeometry",null),T||r.createElement("shaderMaterial",{side:a.DoubleSide,vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader})))});e.s(["Html",()=>b])},47452,e=>{"use strict";let t,n;var i=e.i(43476),r=e.i(71645),o=e.i(75056),a=e.i(71753),s=e.i(30297),l=e.i(13035),c=e.i(31067),d=e.i(90072),u=e.i(15080),f=d,p=d;let h=new p.Box3,m=new p.Vector3;class v extends p.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new p.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new p.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new p.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new p.InterleavedBufferAttribute(n,3,0)),this.setAttribute("instanceEnd",new p.InterleavedBufferAttribute(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let i=new p.InstancedInterleavedBuffer(n,2*t,1);return this.setAttribute("instanceColorStart",new p.InterleavedBufferAttribute(i,t,0)),this.setAttribute("instanceColorEnd",new p.InterleavedBufferAttribute(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new p.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new p.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),h.setFromBufferAttribute(t),this.boundingBox.union(h))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new p.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)m.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(m)),m.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(m));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var y=d,b=e.i(8560);let g=parseInt(d.REVISION.replace(/\D+/g,""));class x extends y.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:y.UniformsUtils.clone(y.UniformsUtils.merge([b.UniformsLib.common,b.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new y.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${g>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let E=g>=125?"uv1":"uv2",w=new f.Vector4,S=new f.Vector3,O=new f.Vector3,A=new f.Vector4,M=new f.Vector4,P=new f.Vector4,L=new f.Vector3,T=new f.Matrix4,j=new f.Line3,_=new f.Vector3,C=new f.Box3,z=new f.Sphere,U=new f.Vector4;function R(e,t,i){return U.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),U.multiplyScalar(1/U.w),U.x=n/i.width,U.y=n/i.height,U.applyMatrix4(e.projectionMatrixInverse),U.multiplyScalar(1/U.w),Math.abs(Math.max(U.x,U.y))}class I extends f.Mesh{constructor(e=new v,t=new x({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let e=0,r=0,o=t.count;e<o;e++,r+=2)S.fromBufferAttribute(t,e),O.fromBufferAttribute(n,e),i[r]=0===r?0:i[r-1],i[r+1]=i[r]+S.distanceTo(O);let r=new f.InstancedInterleavedBuffer(i,2,1);return e.setAttribute("instanceDistanceStart",new f.InterleavedBufferAttribute(r,1,0)),e.setAttribute("instanceDistanceEnd",new f.InterleavedBufferAttribute(r,1,1)),this}raycast(e,i){let r,o,a=this.material.worldUnits,s=e.camera;null!==s||a||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let l=void 0!==e.params.Line2&&e.params.Line2.threshold||0;t=e.ray;let c=this.matrixWorld,d=this.geometry,u=this.material;if(n=u.linewidth+l,null===d.boundingSphere&&d.computeBoundingSphere(),z.copy(d.boundingSphere).applyMatrix4(c),a)r=.5*n;else{let e=Math.max(s.near,z.distanceToPoint(t.origin));r=R(s,e,u.resolution)}if(z.radius+=r,!1!==t.intersectsSphere(z)){if(null===d.boundingBox&&d.computeBoundingBox(),C.copy(d.boundingBox).applyMatrix4(c),a)o=.5*n;else{let e=Math.max(s.near,C.distanceToPoint(t.origin));o=R(s,e,u.resolution)}C.expandByScalar(o),!1!==t.intersectsBox(C)&&(a?function(e,i){let r=e.matrixWorld,o=e.geometry,a=o.attributes.instanceStart,s=o.attributes.instanceEnd,l=Math.min(o.instanceCount,a.count);for(let o=0;o<l;o++){j.start.fromBufferAttribute(a,o),j.end.fromBufferAttribute(s,o),j.applyMatrix4(r);let l=new f.Vector3,c=new f.Vector3;t.distanceSqToSegment(j.start,j.end,c,l),c.distanceTo(l)<.5*n&&i.push({point:c,pointOnLine:l,distance:t.origin.distanceTo(c),object:e,face:null,faceIndex:o,uv:null,[E]:null})}}(this,i):function(e,i,r){let o=i.projectionMatrix,a=e.material.resolution,s=e.matrixWorld,l=e.geometry,c=l.attributes.instanceStart,d=l.attributes.instanceEnd,u=Math.min(l.instanceCount,c.count),p=-i.near;t.at(1,P),P.w=1,P.applyMatrix4(i.matrixWorldInverse),P.applyMatrix4(o),P.multiplyScalar(1/P.w),P.x*=a.x/2,P.y*=a.y/2,P.z=0,L.copy(P),T.multiplyMatrices(i.matrixWorldInverse,s);for(let i=0;i<u;i++){if(A.fromBufferAttribute(c,i),M.fromBufferAttribute(d,i),A.w=1,M.w=1,A.applyMatrix4(T),M.applyMatrix4(T),A.z>p&&M.z>p)continue;if(A.z>p){let e=A.z-M.z,t=(A.z-p)/e;A.lerp(M,t)}else if(M.z>p){let e=M.z-A.z,t=(M.z-p)/e;M.lerp(A,t)}A.applyMatrix4(o),M.applyMatrix4(o),A.multiplyScalar(1/A.w),M.multiplyScalar(1/M.w),A.x*=a.x/2,A.y*=a.y/2,M.x*=a.x/2,M.y*=a.y/2,j.start.copy(A),j.start.z=0,j.end.copy(M),j.end.z=0;let l=j.closestPointToPointParameter(L,!0);j.at(l,_);let u=f.MathUtils.lerp(A.z,M.z,l),h=u>=-1&&u<=1,m=L.distanceTo(_)<.5*n;if(h&&m){j.start.fromBufferAttribute(c,i),j.end.fromBufferAttribute(d,i),j.start.applyMatrix4(s),j.end.applyMatrix4(s);let n=new f.Vector3,o=new f.Vector3;t.distanceSqToSegment(j.start,j.end,o,n),r.push({point:o,pointOnLine:n,distance:t.origin.distanceTo(o),object:e,face:null,faceIndex:i,uv:null,[E]:null})}}}(this,s,i))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(w),this.material.uniforms.resolution.value.set(w.z,w.w))}}class D extends v{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,i=new Float32Array(2*n);if(3===t)for(let r=0;r<n;r+=t)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];else for(let r=0;r<n;r+=t)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5],i[2*r+6]=e[r+6],i[2*r+7]=e[r+7];return super.setColors(i,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class N extends I{constructor(e=new D,t=new x({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let V=r.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:i,lineWidth:o,segments:a,dashed:s,...l},f){var p,h;let m=(0,u.useThree)(e=>e.size),y=r.useMemo(()=>a?new I:new N,[a]),[b]=r.useState(()=>new x),g=(null==n||null==(p=n[0])?void 0:p.length)===4?4:3,E=r.useMemo(()=>{let i=a?new v:new D,r=e.map(e=>{let t=Array.isArray(e);return e instanceof d.Vector3||e instanceof d.Vector4?[e.x,e.y,e.z]:e instanceof d.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(i.setPositions(r.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof d.Color?e.toArray():e);i.setColors(e.flat(),g)}return i},[e,a,n,g]);return r.useLayoutEffect(()=>{y.computeLineDistances()},[e,y]),r.useLayoutEffect(()=>{s?b.defines.USE_DASH="":delete b.defines.USE_DASH,b.needsUpdate=!0},[s,b]),r.useEffect(()=>()=>{E.dispose(),b.dispose()},[E]),r.createElement("primitive",(0,c.default)({object:y,ref:f},l),r.createElement("primitive",{object:E,attach:"geometry"}),r.createElement("primitive",(0,c.default)({object:b,attach:"material",color:t,vertexColors:!!n,resolution:[m.width,m.height],linewidth:null!=(h=null!=i?i:o)?h:1,dashed:s,transparent:4===g},l)))});var H=e.i(60099);let B={Pr:{color:"#22c55e",radius:.4,label:"Pr"},O:{color:"#ef4444",radius:.25,label:"O"},Cl:{color:"#22d3ee",radius:.3,label:"Cl"},F:{color:"#facc15",radius:.2,label:"F"}},F={oxide:{atoms:[{position:[-1,0,0],type:"Pr"},{position:[1,0,0],type:"Pr"},{position:[0,1,.5],type:"O"},{position:[0,-1,.5],type:"O"},{position:[0,0,-1],type:"O"}],bonds:[{start:[-1,0,0],end:[0,1,.5]},{start:[-1,0,0],end:[0,-1,.5]},{start:[-1,0,0],end:[0,0,-1]},{start:[1,0,0],end:[0,1,.5]},{start:[1,0,0],end:[0,-1,.5]},{start:[1,0,0],end:[0,0,-1]}]},chloride:{atoms:[{position:[0,0,0],type:"Pr"},{position:[1.2,0,0],type:"Cl"},{position:[-.6,1.04,0],type:"Cl"},{position:[-.6,-1.04,0],type:"Cl"}],bonds:[{start:[0,0,0],end:[1.2,0,0]},{start:[0,0,0],end:[-.6,1.04,0]},{start:[0,0,0],end:[-.6,-1.04,0]}]},fluoride:{atoms:[{position:[0,0,0],type:"Pr"},{position:[1,0,0],type:"F"},{position:[-.5,.866,0],type:"F"},{position:[-.5,-.866,0],type:"F"}],bonds:[{start:[0,0,0],end:[1,0,0]},{start:[0,0,0],end:[-.5,.866,0]},{start:[0,0,0],end:[-.5,-.866,0]}]}};function k({position:e,type:t,showLabel:n=!0}){let o=B[t],a=(0,r.useRef)(null);return(0,i.jsxs)("group",{position:e,children:[(0,i.jsx)(l.Sphere,{ref:a,args:[o.radius,32,32],children:(0,i.jsx)("meshStandardMaterial",{color:o.color,emissive:o.color,emissiveIntensity:.3,roughness:.3,metalness:.5})}),(0,i.jsx)(l.Sphere,{args:[1.3*o.radius,32,32],children:(0,i.jsx)("meshBasicMaterial",{color:o.color,transparent:!0,opacity:.1})}),n&&(0,i.jsx)(H.Html,{position:[0,o.radius+.3,0],center:!0,style:{pointerEvents:"none",userSelect:"none"},children:(0,i.jsx)("div",{className:"px-2 py-1 rounded bg-background/80 backdrop-blur-sm text-xs font-mono text-foreground border border-border",children:o.label})})]})}function W({start:e,end:t}){let n=[new d.Vector3(...e),new d.Vector3(...t)];return(0,i.jsx)(V,{points:n,color:"#ffffff",lineWidth:2,transparent:!0,opacity:.5})}function Y({compound:e}){let t=(0,r.useRef)(null),n=F[e];return(0,a.useFrame)(e=>{t.current&&(t.current.rotation.y=.3*e.clock.elapsedTime,t.current.rotation.x=.1*Math.sin(.2*e.clock.elapsedTime))}),(0,i.jsxs)("group",{ref:t,children:[n.bonds.map((e,t)=>(0,i.jsx)(W,{start:e.start,end:e.end},`bond-${t}`)),n.atoms.map((e,t)=>(0,i.jsx)(k,{position:e.position,type:e.type},`atom-${t}`))]})}function G({compound:e}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ambientLight",{intensity:.4}),(0,i.jsx)("pointLight",{position:[10,10,10],intensity:1,color:"#ffffff"}),(0,i.jsx)("pointLight",{position:[-10,-10,-10],intensity:.5,color:"#22c55e"}),(0,i.jsx)("spotLight",{position:[0,10,0],angle:.5,penumbra:1,intensity:.5,color:"#0ea5e9"}),(0,i.jsx)(Y,{compound:e}),(0,i.jsx)(s.OrbitControls,{enablePan:!1,minDistance:3,maxDistance:8,autoRotate:!0,autoRotateSpeed:.5})]})}function X({compound:e}){return(0,i.jsx)("div",{className:"w-full h-full min-h-[300px]",children:(0,i.jsx)(o.Canvas,{camera:{position:[0,0,5],fov:50},gl:{antialias:!0},onCreated:({gl:e})=>{e.setClearColor("#0a0a14")},children:(0,i.jsx)(r.Suspense,{fallback:null,children:(0,i.jsx)(G,{compound:e})})})})}e.s(["MoleculeViewer",()=>X],47452)},82170,e=>{e.n(e.i(47452))}]);